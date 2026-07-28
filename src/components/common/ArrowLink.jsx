import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArrowLink({ to, children, className = '' }) {
  const classes = `arrow-link ${className}`.trim();

  return (
    <Link className={classes} to={to}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}
