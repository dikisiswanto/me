import * as Icons from 'react-icons/fi';

export default function DynamicFiIcon({ name, style }) {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    return <Icons.FiList />;
  }

  return <IconComponent style={{ ...style }} />;
}
