import Image from "next/image";
import classNames from "classnames";

interface MenuItemProps {
  title: string;
  icon: 'ic-menu-overview' | 'ic-menu-transaction' | 'ic-menu-message' | 'ic-menu-card' | 'ic-menu-setting' | 'ic-menu-logout';
  active?: boolean;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const {title, icon, active} = props;
  const classItem = classNames({
    'item': true,
    'mb-30': true,
    'active': active
  })


  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="icon" />
      </div>
      <p className="item-title m-0">
        <a href="" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}
