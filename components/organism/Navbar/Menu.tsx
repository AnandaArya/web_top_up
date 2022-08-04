import cx from 'classnames'
import Link from 'next/link'

interface MenuProps {
  title: string;
  active?: boolean; // tanda (?) ini berarti propsnya optional atau tidak required, karena tidak required kita harus membuat default valuenya atau kita bisa menghandle tersebut menggunakan Schema Partial
                    // jadi tidak seluruhnya kita assign default valuenya
  href: string;
}

export default function Menu(props: Partial<MenuProps>) {
                // default valuenya adalah false
  // const {title, active=false} = props;
  const {title, active, href = '/'} = props;

  const className = cx({
    "nav-link": true,
    active: active,
  });

  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={className} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
