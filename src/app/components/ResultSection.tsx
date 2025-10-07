"use client";

const ResultSection = ({
  formData,
  onRestart,
}: {
  formData: { firstName: string; email: string };
  onRestart: () => void;
}) => (
  <section>
    <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", alignItems: "center", gap: 16, height: "100%"}}>
      <p style={{ textAlign: "center" }}>
        Thanks, {formData.firstName}! Now, it’s time to get a reality check. 
        <br /><br />This will take 2-3 minutes. 
      </p>
      <button className="invert white" onClick={onRestart}>Continue</button>
    </div>
  </section>
);

export default ResultSection;
