import api from "../services/api";

export default function DownloadButton({ company }) {

  const downloadPDF = async () => {

    if (!company) {
      alert("Company name not found.");
      return;
    }

    try {

      const response = await api.post(
        "/generate-pdf",
        {
          company,
        },
        {
          responseType: "blob",
          validateStatus: () => true,
        }
      );

      const contentType = response.headers["content-type"] || "";

      console.log("Status:", response.status);
      console.log("Content-Type:", contentType);

      // Backend returned JSON
      if (!contentType.includes("application/pdf")) {

        const text = await response.data.text();

        console.error(text);

        alert("Backend returned:\n\n" + text);

        return;
      }

      // Always create a Blob explicitly
      const pdfBlob = new Blob(
        [response.data],
        {
          type: "application/pdf",
        }
      );

      const url = window.URL.createObjectURL(pdfBlob);

      const a = document.createElement("a");

      a.href = url;
      a.download = `${company}_Company_Report.pdf`;

      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);

    } catch (err) {

      console.error(err);

      alert("Download failed.");

    }

  };

  return (
    <button
      type="button"
      onClick={downloadPDF}
      style={{
        marginTop: "30px",
        padding: "15px 30px",
        background: "#16a34a",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      📄 Download PDF
    </button>
  );
}