"use client";

export default function Academy(){

const tracks=["Ruta Dinero","Ruta Cumplimiento","Ruta Protección"]

return(

<section style={{padding:"100px 0"}}>

<div style={{maxWidth:1200,margin:"0 auto",padding:"0 22px"}}>

<h2>Sovereign Academy</h2>

<div style={{display:"flex",gap:20,marginTop:30}}>

{tracks.map(t=>(
<div key={t} style={{
padding:20,
border:"1px solid rgba(255,255,255,.1)",
borderRadius:12
}}>
{t}
</div>
))}

</div>

</div>

</section>

)

}