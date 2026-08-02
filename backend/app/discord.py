import discord

intents = discord.Intents.default()

client = discord.Client(intents=intents)


async def send_report(
    token,
    channel_id,
    applicant_name,
    applicant_email,
    company,
    pdf_path
):

    channel = await client.fetch_channel(channel_id)

    message = f"""
Applicant : {applicant_name}

Email : {applicant_email}

Company : {company}
"""

    await channel.send(
        message,
        file=discord.File(pdf_path)
    )