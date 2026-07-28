import { useId } from 'react';

function SystemField() {
  return (
    <svg aria-hidden="true" viewBox="0 0 240 150">
      <path className="identity-field__line--quiet" d="M44 92 L105 48 L178 83 L108 119 Z" />
      <path className="identity-field__line" d="M44 92 L108 119 L178 83" />
      <circle className="identity-field__node" cx="44" cy="92" r="7" />
      <circle className="identity-field__node" cx="105" cy="48" r="7" />
      <circle className="identity-field__node identity-field__node--active" cx="178" cy="83" r="8" />
      <circle className="identity-field__node" cx="108" cy="119" r="7" />
      <circle className="identity-field__point" cx="141" cy="101" r="3" />
    </svg>
  );
}

function SignalField() {
  return (
    <svg aria-hidden="true" viewBox="0 0 240 150">
      <path
        className="identity-field__band"
        d="M25 105 C53 93 69 105 91 82 S130 91 151 64 S190 70 215 42 L215 73 C188 92 174 88 151 93 S112 106 91 111 S51 119 25 125 Z"
      />
      <path
        className="identity-field__line"
        d="M25 115 C52 101 69 114 91 94 S128 100 151 77 S187 82 215 57"
      />
      <circle className="identity-field__point" cx="55" cy="103" r="3" />
      <circle className="identity-field__point" cx="91" cy="94" r="3" />
      <circle className="identity-field__point" cx="126" cy="100" r="3" />
      <circle className="identity-field__point" cx="184" cy="80" r="3" />
      <circle className="identity-field__anomaly" cx="151" cy="51" r="9" />
      <circle className="identity-field__point" cx="151" cy="51" r="3" />
    </svg>
  );
}

function MovementField() {
  return (
    <svg aria-hidden="true" viewBox="0 0 240 150">
      <path
        className="identity-field__line--quiet"
        d="M23 121 C54 112 56 65 91 72 S130 114 155 80 S184 31 215 42"
      />
      <path
        className="identity-field__line identity-field__line--dashed"
        d="M23 121 C54 112 56 65 91 72 S130 114 155 80"
      />
      <path className="identity-field__prediction" d="M155 80 C177 52 187 35 215 42" />
      <circle className="identity-field__cluster" cx="58" cy="91" r="18" />
      <circle className="identity-field__cluster" cx="118" cy="91" r="22" />
      <circle className="identity-field__cluster" cx="183" cy="48" r="16" />
      <circle className="identity-field__point" cx="58" cy="91" r="4" />
      <circle className="identity-field__point" cx="118" cy="91" r="4" />
      <circle className="identity-field__point" cx="183" cy="48" r="4" />
    </svg>
  );
}

const domains = [
  { label: 'Systems', Visual: SystemField },
  { label: 'Uncertain signals', Visual: SignalField },
  { label: 'Movement', Visual: MovementField },
];

export default function IdentityField() {
  const captionId = useId();

  return (
    <figure className="identity-field" aria-labelledby={captionId}>
      <div className="identity-field__plots">
        {domains.map(({ label, Visual }) => (
          <div className="identity-field__plot" key={label}>
            <span>{label}</span>
            <Visual />
          </div>
        ))}
      </div>
      <figcaption id={captionId}>Three working domains</figcaption>
    </figure>
  );
}
