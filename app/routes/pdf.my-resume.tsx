import { renderToStream } from "@react-pdf/renderer";
import type { LoaderFunction } from "@remix-run/node";
import { ResumePdf } from "~/components";

interface RequestType {
  summary: string | null;
}

export const loader: LoaderFunction = async ({ request }) => {
  // you can get any data you need to generate the PDF inside the loader
  // however you want, e.g. fetch an API or query a DB or read the FS

  const data: RequestType = await request.json().catch(() => {
    return {
      summary: null,
    };
  });

  // render the PDF as a stream so you do it async
  const stream = await renderToStream(
    <ResumePdf
      email={import.meta.env.VITE_EMAIL}
      phone={import.meta.env.VITE_PHONE}
      location={import.meta.env.VITE_LOCATION}
      photo="/img/author-resume.jpg"
      name="Danylo Kovalchuk"
      title="Full-Stack Developer"
      summary={
        data.summary ??
        "With over three years of experience in frontend development, I have worked extensively with JavaScript, HTML5, CSS3, and React to build dynamic and user-friendly applications. I thrive on tackling complex development tasks and enjoy finding innovative solutions that meet customer expectations. With a proactive mindset and a strong sense of initiative, I am always looking for ways to improve and optimize projects. Additionally, my communicative knowledge of English enables effective collaboration in international teams, ensuring seamless project execution."
      }
      education="ff"
      experience={[
        { title: "fff", bullets: ["rter"], company: "ryrty", period: "yrtryy" },
      ]}
      links={["etrte", "rtert", "tyrtr"]}
      skills={["etert", "khjk", "cxcbbgh"]}
    />,
  );

  // and transform it to a Buffer to send in the Response
  const body: Buffer = await new Promise((resolve, reject) => {
    const buffers: Uint8Array[] = [];
    stream.on("data", (data) => {
      buffers.push(data);
    });
    stream.on("end", () => {
      resolve(Buffer.concat(buffers));
    });
    stream.on("error", reject);
  });

  // finally create the Response with the correct Content-Type header for
  // a PDF
  const headers = new Headers({ "Content-Type": "application/pdf" });
  return new Response(body, { status: 200, headers });
};
