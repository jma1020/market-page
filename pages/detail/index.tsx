function Detail() {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <details>
        <summary className="cursor-pointer">음식</summary>
        <span className="selection:bg-indigo-400 selection:text-white">
          김치
        </span>
      </details>

      <details className="select-none open:text-wh open:bg-indigo-400">
        <summary className="cursor-pointer">음식</summary>
        <span>김치</span>
      </details>

      <ul className="list-decimal marker:text-teal-400">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <input
        type="file"
        className="file:cursor-wait file:hover: file:transition-colors file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-300"
      />
    </div>
  );
}
export default Detail;
