import { Link } from 'react-router-dom';
import Icon from './Icon';

const isExternal = (href) => /^https?:\/\//.test(href);

// Router link for in-site paths, new-tab anchor (with a marker) for other sites.
// Files (anything with an extension, like the CV PDF) use a plain anchor so the router
// never handles them. `context` adds screen-reader-only text after the visible label,
// so several "live" or "code" links stay distinguishable.
export default function SmartLink({ href, children, className, showExternal = true, context, ...rest }) {
  const extra = context ? <span className="sr-only">, {context}</span> : null;
  if (isExternal(href)) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        {extra}
        {showExternal && <Icon name="external" className="icon ext" />}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  if (/\.[a-z0-9]+(?:[?#].*)?$/i.test(href)) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
        {extra}
      </a>
    );
  }
  return (
    <Link to={href} className={className} {...rest}>
      {children}
      {extra}
    </Link>
  );
}

export function LinkRow({ links, className = 'links', context }) {
  if (!links?.length) return null;
  return (
    <div className={className}>
      {links.map((l) => (
        <SmartLink key={l.href} href={l.href} context={context}>
          {l.label}
        </SmartLink>
      ))}
    </div>
  );
}
