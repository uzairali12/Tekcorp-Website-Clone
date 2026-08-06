"use client";
import { useRef, useEffect } from "react";

const impacts = [
  "More efficient digital operations",
  "Improved search visibility",
  "Better customer engagement",
  "Scalable platforms for future growth",
  "Streamlined workflows and automation",
];

export default function Impact() {
  const ref = useRef(null);
  useEffect(()=>{
    const obs = new IntersectionObserver(e=>{e.forEach(x=>{
      if(x.isIntersecting){
        x.target.querySelectorAll(".sr,.sr-l,.sr-r").forEach(el=>el.classList.add("in"));
        x.target.querySelectorAll(".ii").forEach((el,i)=>{
          setTimeout(()=>{ el.style.opacity="1"; el.style.transform="none"; },150+i*90);
        });
      }
    });},{threshold:0.15});
    if(ref.current) obs.observe(ref.current);
    return ()=>{ if(ref.current) obs.unobserve(ref.current); };
  },[]);

  return (
    <section ref={ref} style={{background:"var(--bg)",padding:"96px 0"}}>
      <div style={{maxWidth:1280,margin:"0 auto",padding:"0 48px"}}>
        <div className="imp-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"center"}}>

          {/* LEFT */}
          <div className="sr-l">
            <h2 style={{fontFamily:"var(--font-h)",fontWeight:800,fontSize:"clamp(1.8rem,3.5vw,2.9rem)",letterSpacing:"-0.03em",lineHeight:1.1,marginBottom:18}}>
              What the{" "}
              <span style={{background:"var(--teal)",padding:"1px 10px 4px",borderRadius:6,display:"inline"}}>Right Digital</span>
              <br/>Systems Can Achieve
            </h2>
            <p style={{fontFamily:"var(--font-h)",fontWeight:600,fontSize:"0.95rem",color:"var(--text-mid)",fontStyle:"italic",marginBottom:32}}>
              Organizations working with TekCorp often experience:
            </p>
            <ol style={{listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:14}}>
              {impacts.map((item,i)=>(
                <li key={i} className="ii" style={{
                  display:"flex",alignItems:"center",gap:14,
                  opacity:0,transform:"translateX(-18px)",transition:"opacity 0.5s ease,transform 0.5s ease",
                }}>
                  <div style={{
                    minWidth:30,height:30,borderRadius:"50%",
                    background:"var(--teal-light)",border:"2px solid var(--teal)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontFamily:"var(--font-h)",fontWeight:800,fontSize:"0.75rem",color:"var(--teal-dark)",flexShrink:0,
                  }}>{i+1}</div>
                  <span style={{fontSize:"0.97rem",color:"var(--text-mid)"}}>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* RIGHT */}
          <div className="sr-r" style={{position:"relative"}}>
            <div style={{borderRadius:22,overflow:"hidden",boxShadow:"0 18px 56px rgba(0,0,0,0.11)",position:"relative"}}>
              
              {/* Image Container */}
              <div style={{
                width:"100%",paddingBottom:"68%",position:"relative",
                backgroundColor:"#c0d8cc",
              }}>
                <img 
                  src="assets/impactjpg.jpg" 
                  alt="Business team collaborating around a laptop"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>

              {/* quote overlay */}
              <div style={{
                position:"absolute",bottom:0,left:0,right:0,
                padding:"22px 26px",
                background:"rgba(255,255,255,0.90)",backdropFilter:"blur(10px)",
              }}>
                <p style={{fontFamily:"var(--font-h)",fontWeight:600,fontSize:"0.92rem",color:"var(--text)",fontStyle:"italic",lineHeight:1.4}}>
                  Our focus is simple — build digital solutions that create measurable impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .imp-grid{grid-template-columns:1fr!important;gap:40px!important;} }
        @media(max-width:480px){ section>div{padding:0 16px!important;} }
      `}</style>
    </section>
  );
}