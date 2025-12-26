export const InCompleteArea = () => {
  return (
    <div className="border-2 rounded-md border-primary min-h-50 mt-2 py-2 px-4">
      <h4 className="text-gray-600 text-center font-bold">未完了のTODO</h4>
      <ul className="mt-3">
        <li>
          タスク１
          <button className="bg-gray-200 py-1 px-2 rounded-md ml-1 hover:bg-active hover:text-white hover:cursor-pointer">
            完了
          </button>
          <button className="bg-gray-200 py-1 px-2 rounded-md ml-1 hover:bg-active hover:text-white hover:cursor-pointer">
            削除
          </button>
        </li>
      </ul>
    </div>
  );
};
