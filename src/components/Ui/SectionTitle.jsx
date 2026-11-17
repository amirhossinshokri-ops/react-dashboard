
function SectionTitle({title,caption,action}) {
  return (

    <>
  <div>
    <h1 className="text-2xl font-extrabold">{title}</h1>
    <p className="text-sm text-slate-500 mt-2">
{caption}    </p>
  </div>


  <div>
    {action}
  </div>
 </>


  )
}

export default SectionTitle