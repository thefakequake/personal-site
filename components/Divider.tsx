import styles from "@/styles/Divider.module.css"
import clsx from "clsx"
import { CSSProperties } from "react"

interface DividerProps {
  thickness: number
  align: "left" | "center" | "right"
  width: "narrow" | "wide" | "wider" | "max"
  gradient?: boolean
  className?: string
  style?: CSSProperties
}

const Divider = ({
  thickness,
  gradient,
  className,
  style,
  align,
  width
}: DividerProps) => {
  return (
    <hr
      className={clsx(
        styles.divider,
        className,
        gradient && styles.gradient,
        align == "center"
          ? styles.center
          : align == "left"
          ? styles.left
          : styles.right
      )}
      style={{
        width:
          width == "narrow"
            ? "40%"
            : width == "wide"
            ? "70%"
            : width == "wider"
            ? "87.5%"
            : "100%",
        height: `${thickness}px`,
        ...style
      }}
    />
  )
}

export default Divider
