export function Frame({
  
  src,
  width,
  height,
  displayWidth,
  displayHeight,
  transform,
  alt,
  id,
}) {
  return (
    <svg
      key={id}
      width="100%"
      height={displayHeight}
      viewBox={`0 0 ${displayWidth} ${displayHeight}`}
      fill="none"
      xlinkTitle={alt}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      filter="grayscale(1)"
      className="hover:filter-none"
    >
      <rect
        width={displayWidth}
        height={displayHeight}
        rx="20"
        fill={`url(#pattern_${id})`}
      />
      <defs>
        <pattern
          id={"pattern_" + id}
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref={"#" + id} transform={transform} />
        </pattern>
        <image id={id} width={width} height={height} xlinkHref={src} />
      </defs>
    </svg>
  );
}