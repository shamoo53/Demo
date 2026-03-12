
import Doris from '../assets/doris.svg';

function formatDescription(text = '') {
  const words = text.trim().split(/\s+/);
  const lines = [];
  for (let i = 0; i < words.length; i += 6) {
    lines.push(words.slice(i, i + 6).join(' '));
  }
  return lines;
}

const CardText = ({ BeeIcon, themeColor }) => {
  const item = {
    task: 'Take recent orders on Jumia',
    date: 'August 23, 2023',
    name: 'Doris K. John',
    description: 'Required to look up items on Jumia, select required item place',
  };

  return (
    <div className="bg-white shadow-md rounded-md p-3 w-fit xl:w-full">
      <div className="flex items-start space-x-2 whitespace-nowrap min-w-full w-[1170px]">

        {/* Checkbox — matches header checkbox */}
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 rounded border-gray-300 mr-3 shrink-0 mt-0.5"
          style={{ accentColor: themeColor }}
        />

        {/* Events column — flex-1, pl-24 to match header "Events" */}
        <div className="flex-1 pl-12 md:pl-24 flex items-center gap-2">
          <img src={Doris} alt="avatar" className="h-6 w-6 rounded-full shrink-0" />
          <span className="text-gray-600 font-semibold text-sm leading-5 whitespace-normal break-words">
            {item.task}
          </span>
        </div>

        {/* Dates column — flex-1, pl-12 to match header "Dates" */}
        <div className="flex-1 pl-12 text-gray-600 font-semibold text-sm leading-5">
          {item.date}
        </div>

        {/* Role column — flex-1, pl-6 to match header "Role" */}
        <div className="flex-1 pl-6 flex items-center gap-2">
          <img src={BeeIcon} alt="profile" className="h-6 w-6 rounded-full shrink-0" />
          <span className="text-gray-600 font-semibold text-sm leading-5 whitespace-normal">
            {item.name}
          </span>
        </div>

        {/* Description column — flex-1, pr-10 matches Cards description end position */}
        <div className="flex-1 text-gray-600 font-semibold text-sm leading-6 whitespace-normal pr-10">
          {formatDescription(item.description).map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CardText;