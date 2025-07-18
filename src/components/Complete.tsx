
interface CompleteProps {
    Completes: string[];
    onClick: (index: number) => void;
}

export const Complete: React.FC<CompleteProps> = ({ Completes, onClick }) => {

return(
    <div className='mx-2 mx-2 bg-teal-400 rounded-md border-2 border-teal-400 py-2 min-h-[350px]'>
    <p className='text-xl font-bold text-center'>完了のTODO</p>
    <ul className='flex-col items-center mx-2 gap-2'>
      {Completes.map((todo, index) => (
          <li key={index} className='flex items-center gap-2'>
            <p className="flex-grow">{todo}</p>
            <button className="bg-gray-200 my-2 hover:bg-gray-300" onClick={() => onClick(index)}>戻す</button>
          </li>
        ))}
    </ul>
  </div>
);
};