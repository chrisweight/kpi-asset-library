/**
 * TODO: Super simple button, doesn't reflect a real-world implementation
 */

type ButtonType = 'primary' | 'secondary';

type ButtonProps = {
  type?: ButtonType;
  icon?: JSX.Element;
  block?: boolean;
  text: string;
  onClick?: (e: any) => void;
}

const bgColourMap: { [key in ButtonType]: string } = {
  'primary': 'bg-gray-500',
  'secondary': 'bg-gray-900',
}

export function Button({ icon, text, type = 'primary', block = false, onClick }: ButtonProps) {
  const bgColor = bgColourMap[type];

  return (
    <button 
      className={`
        text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 
        ${bgColor} 
        ${block ? 'w-full' : ''}
      `} 
      onClick={onClick}
    >
      <div className="flex items-center align-middle justify-center">
      {icon && <div className="pr-2">{icon}</div>}
      <p className="text-white font-normal">{ text }</p>
      </div>
    </button>
  );
}