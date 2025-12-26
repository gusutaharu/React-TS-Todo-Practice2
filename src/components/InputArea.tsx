export const InputArea = () => {
  return (
    <div className="bg-primary rounded-lg p-2 ">
      <input
        type="text"
        placeholder="TODOを入力"
        className="bg-white rounded-md py-1 px-3"
      />
      <button className="bg-gray-200 py-1 px-2 rounded-md ml-1 hover:bg-active hover:text-white hover:cursor-pointer">
        追加
      </button>
    </div>
  );
};
