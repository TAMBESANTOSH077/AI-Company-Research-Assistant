import { useState } from "react";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ChatInput from "../components/ChatInput";
import ProgressBar from "../components/ProgressBar";
import CompanyReport from "../components/CompanyReport";
import ProductCard from "../components/ProductCard";
import PainPointCard from "../components/PainPointCard";
import CompetitorCard from "../components/CompetitorCard";
import DownloadButton from "../components/DownloadButton";

export default function Home() {

  const [result, setResult] = useState(null);
  const [step, setStep] = useState(-1);

  // NEW
  const [companyName, setCompanyName] = useState("");

  return (
    <Layout>

      <Navbar />

      <div className="max-w-5xl mx-auto py-10 px-5">

        <ChatInput
          setResult={setResult}
          setStep={setStep}
          setCompanyName={setCompanyName}
        />

        <ProgressBar step={step} />

        {result && (
          <>
            <CompanyReport report={result} />

            <ProductCard
              products={result.products}
            />

            <PainPointCard
              painPoints={result.pain_points}
            />

            <CompetitorCard
              competitors={result.competitors}
            />

            <DownloadButton
              company={companyName}
            />
          </>
        )}

      </div>

    </Layout>
  );
}