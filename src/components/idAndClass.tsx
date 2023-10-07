const IdAndClass = () => {
  return(
    <div className="flex my-3">
      <div className="flex-1">
        <div className="flex w-full">
          <label className="mr-1">id :</label>
          <input className="border border-black px-1 rounded w-3/4" />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex w-full">
          <label className="mr-1">class :</label>
          <input className="border border-black px-1 rounded w-3/4" />
        </div>
      </div>
    </div>
  );
}

export default IdAndClass;
