import { useId } from "react";

const gridLines = {
  vertical: [80, 160, 240, 320, 400, 480, 560, 640, 720],
  horizontal: [70, 140, 210, 280, 350, 420],
};

function VisualGrid() {
  return (
    <g aria-hidden="true">
      {gridLines.vertical.map((x) => (
        <line
          className="project-visual__grid"
          key={`v-${x}`}
          x1={x}
          x2={x}
          y1="0"
          y2="500"
        />
      ))}
      {gridLines.horizontal.map((y) => (
        <line
          className="project-visual__grid"
          key={`h-${y}`}
          x1="0"
          x2="800"
          y1={y}
          y2={y}
        />
      ))}
    </g>
  );
}

function VisualCaption({ children }) {
  return <span className="project-visual__caption">{children}</span>;
}

export function TradingInfrastructureVisual({
  className = "",
  caption = "Anonymised event flow",
}) {
  const titleId = useId();
  const descriptionId = useId();
  const eventPath =
    'path("M 134 250 C 215 250 222 250 302 250 S 412 174 485 174 S 563 118 650 118")';

  return (
    <figure
      className={`project-visual project-visual--trading ${className}`.trim()}
    >
      <svg
        aria-labelledby={`${titleId} ${descriptionId}`}
        role="img"
        viewBox="0 0 800 500"
      >
        <title id={titleId}>Distributed trading infrastructure event flow</title>
        <desc id={descriptionId}>
          An anonymised system diagram showing a signal moving through
          orchestration, replicated state, monitoring, and groups of execution
          accounts.
        </desc>
        <VisualGrid />

        <rect
          className="project-visual__panel"
          x="56"
          y="184"
          width="154"
          height="132"
          rx="8"
        />
        <text className="project-visual__label" x="80" y="215">
          SIGNAL SOURCE
        </text>
        <text className="project-visual__value" x="80" y="248">
          Event accepted
        </text>
        <circle
          className="project-visual__dot project-visual__pulse"
          cx="82"
          cy="280"
          r="8"
        />
        <circle className="project-visual__dot" cx="82" cy="280" r="4" />
        <text className="project-visual__label" x="99" y="284">
          sequence 8f1c
        </text>

        <rect
          className="project-visual__panel"
          x="278"
          y="184"
          width="172"
          height="132"
          rx="8"
        />
        <text className="project-visual__label" x="302" y="215">
          ORCHESTRATOR
        </text>
        <text className="project-visual__value" x="302" y="248">
          State machine
        </text>
        <path
          className="project-visual__line--secondary"
          d="M302 275 H326 L338 263 L356 289 L373 274 H422"
          strokeWidth="2"
        />
        <text className="project-visual__label" x="302" y="302">
          CAS synchronized
        </text>

        <rect
          className="project-visual__panel"
          x="493"
          y="70"
          width="246"
          height="215"
          rx="8"
        />
        <text className="project-visual__label" x="518" y="102">
          EXECUTION FLEET
        </text>
        {[0, 1, 2, 3].map((row) => (
          <g key={row} transform={`translate(518 ${126 + row * 37})`}>
            <rect
              className="project-visual__panel--quiet"
              width="194"
              height="26"
              rx="4"
            />
            <circle
              className={
                row === 3
                  ? "project-visual__dot--warning"
                  : "project-visual__dot--success"
              }
              cx="15"
              cy="13"
              r="4"
            />
            <text className="project-visual__label" x="28" y="17">
              {row === 3 ? "host · recovery checked" : `host · shard 0${row + 1}`}
            </text>
            <text
              className="project-visual__label"
              textAnchor="end"
              x="179"
              y="17"
            >
              {row === 3 ? "ready" : `${48 + row * 11} ms`}
            </text>
          </g>
        ))}

        <rect
          className="project-visual__panel"
          x="493"
          y="329"
          width="246"
          height="98"
          rx="8"
        />
        <text className="project-visual__label" x="518" y="359">
          OBSERVABILITY
        </text>
        <path
          className="project-visual__line"
          d="M518 396 L546 387 L575 391 L603 371 L632 379 L661 357 L711 365"
          strokeWidth="3"
        />
        <text className="project-visual__label" x="518" y="416">
          live execution health
        </text>

        <path
          className="project-visual__line"
          d="M210 250 C238 250 249 250 278 250"
          strokeWidth="2"
        />
        <path
          className="project-visual__line"
          d="M450 250 C478 250 466 174 493 174"
          strokeWidth="2"
        />
        <path
          className="project-visual__line--secondary"
          d="M450 274 C474 286 469 378 493 378"
          strokeWidth="2"
        />
        <circle
          className="project-visual__dot project-visual__event"
          cx="0"
          cy="0"
          r="5"
          style={{ offsetPath: eventPath }}
        />

        <text className="project-visual__label" x="56" y="459">
          50+ accounts
        </text>
        <text
          className="project-visual__value"
          textAnchor="middle"
          x="400"
          y="459"
        >
          &lt;100 ms replication
        </text>
        <text
          className="project-visual__label"
          textAnchor="end"
          x="739"
          y="459"
        >
          fault-aware coordination
        </text>
      </svg>
      <VisualCaption>{caption}</VisualCaption>
    </figure>
  );
}

export function IndustrialModelVisual({
  className = "",
  caption = "Abstracted model comparison",
}) {
  const titleId = useId();
  const descriptionId = useId();
  const models = [
    { name: "DNN", score: 116, x: 92 },
    { name: "SVR", score: 91, x: 166 },
    { name: "Tree", score: 71, x: 240 },
    { name: "XGBoost", score: 128, x: 314 },
  ];
  const observations = [
    [492, 330],
    [511, 305],
    [525, 317],
    [544, 279],
    [560, 287],
    [578, 250],
    [596, 263],
    [615, 219],
    [634, 231],
    [652, 196],
    [670, 175],
    [687, 185],
    [705, 147],
  ];

  return (
    <figure
      className={`project-visual project-visual--industrial ${className}`.trim()}
    >
      <svg
        aria-labelledby={`${titleId} ${descriptionId}`}
        role="img"
        viewBox="0 0 800 500"
      >
        <title id={titleId}>Industrial predictive model comparison</title>
        <desc id={descriptionId}>
          An abstracted analytical view comparing four regression approaches
          beside a noisy process trend with detected outlier observations.
        </desc>
        <VisualGrid />

        <rect
          className="project-visual__panel"
          x="52"
          y="64"
          width="358"
          height="363"
          rx="8"
        />
        <text className="project-visual__label" x="79" y="99">
          MODEL COMPARISON
        </text>
        <text className="project-visual__value" x="79" y="127">
          Cross-validated fit
        </text>
        <line
          className="project-visual__line--muted"
          x1="79"
          x2="382"
          y1="352"
          y2="352"
        />
        <line
          className="project-visual__line--muted"
          x1="79"
          x2="79"
          y1="168"
          y2="352"
        />
        {models.map((model, index) => (
          <g key={model.name}>
            <rect
              className="project-visual__bar"
              x={model.x}
              y={352 - model.score}
              width="44"
              height={model.score}
              rx="3"
              fill={index === 3 ? "var(--color-accent)" : "var(--color-surface-strong)"}
            />
            <text
              className="project-visual__label"
              textAnchor="middle"
              x={model.x + 22}
              y="378"
            >
              {model.name}
            </text>
          </g>
        ))}
        <text className="project-visual__label" x="79" y="405">
          Same preprocessing · same validation split
        </text>

        <rect
          className="project-visual__panel"
          x="438"
          y="64"
          width="310"
          height="363"
          rx="8"
        />
        <text className="project-visual__label" x="466" y="99">
          PROCESS SIGNAL
        </text>
        <text className="project-visual__value" x="466" y="127">
          Ageing curve
        </text>
        <path
          className="project-visual__line--muted"
          d="M472 357 H720 M472 287 H720 M472 217 H720 M472 147 H720"
        />
        <path
          className="project-visual__line"
          d="M480 339 C520 327 547 287 578 263 S635 205 705 151"
          strokeWidth="3"
        />
        <path
          d="M480 354 C521 335 549 303 578 279 S635 220 705 169 L705 133 C641 189 619 201 578 247 S521 312 480 324 Z"
          fill="var(--color-accent-soft)"
        />
        {observations.map(([cx, cy], index) => (
          <circle
            className={
              index === 3 || index === 9
                ? "project-visual__dot--warning"
                : "project-visual__dot--secondary"
            }
            cx={cx}
            cy={index === 3 ? cy + 65 : index === 9 ? cy - 53 : cy}
            key={`${cx}-${cy}`}
            r={index === 3 || index === 9 ? 6 : 3.5}
          />
        ))}
        <circle
          cx="544"
          cy="344"
          fill="none"
          r="12"
          stroke="var(--color-warning)"
          strokeDasharray="3 3"
        />
        <circle
          cx="652"
          cy="143"
          fill="none"
          r="12"
          stroke="var(--color-warning)"
          strokeDasharray="3 3"
        />
        <text className="project-visual__label" x="466" y="405">
          LOF review · anomalous observations marked
        </text>

        <text className="project-visual__label" x="52" y="461">
          chemistry + treatment features
        </text>
        <text
          className="project-visual__label"
          textAnchor="end"
          x="748"
          y="461"
        >
          noise-aware regression
        </text>
      </svg>
      <VisualCaption>{caption}</VisualCaption>
    </figure>
  );
}

export function TrajectoryVisual({
  className = "",
  caption = "Anonymised trajectory clusters",
}) {
  const titleId = useId();
  const descriptionId = useId();
  const clusters = [
    { x: 181, y: 131, r: 31 },
    { x: 328, y: 253, r: 39 },
    { x: 523, y: 164, r: 34 },
    { x: 640, y: 331, r: 42 },
  ];

  return (
    <figure
      className={`project-visual project-visual--trajectory ${className}`.trim()}
    >
      <svg
        aria-labelledby={`${titleId} ${descriptionId}`}
        role="img"
        viewBox="0 0 800 500"
      >
        <title id={titleId}>GPS trajectory intelligence map</title>
        <desc id={descriptionId}>
          An anonymised map-like visual showing noisy movement tracks, four
          extracted location clusters, and a predicted next route.
        </desc>
        <VisualGrid />

        <path
          className="project-visual__line--muted"
          d="M39 103 C139 141 143 214 255 223 S408 115 476 124 S602 236 760 214"
          strokeWidth="20"
        />
        <path
          className="project-visual__line--muted"
          d="M108 472 C168 398 223 375 301 391 S447 448 520 396 S599 268 768 289"
          strokeWidth="14"
        />
        <path
          className="project-visual__line--muted"
          d="M207 35 C260 108 269 182 319 259 S411 385 455 467"
          strokeWidth="11"
        />

        <path
          className="project-visual__line--secondary project-visual__route"
          d="M78 192 C137 154 158 137 181 131 S265 196 328 253 S449 202 523 164 S603 278 640 331 S686 378 735 407"
          strokeWidth="2"
        />
        <path
          className="project-visual__line--secondary"
          d="M72 239 C145 213 220 297 289 280 S369 197 448 224 S566 367 707 351"
          opacity="0.45"
          strokeDasharray="3 7"
          strokeWidth="1.5"
        />
        <path
          className="project-visual__line--secondary"
          d="M128 73 C201 110 240 169 275 224 S384 323 464 312 S577 245 704 269"
          opacity="0.34"
          strokeDasharray="2 8"
          strokeWidth="1.5"
        />

        {clusters.map((cluster, index) => (
          <g key={`${cluster.x}-${cluster.y}`}>
            <circle
              cx={cluster.x}
              cy={cluster.y}
              fill="var(--color-accent-soft)"
              r={cluster.r}
              stroke="var(--color-accent)"
              strokeDasharray="4 5"
            />
            <circle
              className="project-visual__dot"
              cx={cluster.x}
              cy={cluster.y}
              r="6"
            />
            <text
              className="project-visual__value"
              x={cluster.x + 15}
              y={cluster.y - 13}
            >
              L{index + 1}
            </text>
          </g>
        ))}

        <path
          className="project-visual__line project-visual__prediction"
          d="M640 331 C675 333 710 319 747 284"
          strokeWidth="4"
        />
        <path
          d="M747 284 L733 285 L741 297 Z"
          fill="var(--color-accent)"
        />
        <rect
          className="project-visual__panel"
          x="53"
          y="367"
          width="204"
          height="73"
          rx="7"
        />
        <text className="project-visual__label" x="77" y="394">
          PIPELINE
        </text>
        <text className="project-visual__value" x="77" y="419">
          segment → cluster → predict
        </text>

        <text className="project-visual__label" x="53" y="470">
          heterogeneous GPS samples
        </text>
        <text
          className="project-visual__value"
          textAnchor="end"
          x="747"
          y="470"
        >
          ~10× faster clustering
        </text>
      </svg>
      <VisualCaption>{caption}</VisualCaption>
    </figure>
  );
}

const visuals = {
  trading: TradingInfrastructureVisual,
  industrial: IndustrialModelVisual,
  trajectory: TrajectoryVisual,
};

export function ProjectVisual({ type, ...props }) {
  const Visual = visuals[type] ?? TradingInfrastructureVisual;
  return <Visual {...props} />;
}

export default ProjectVisual;
