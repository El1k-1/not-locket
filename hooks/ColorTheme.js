import { useRef } from "react"

export const themeColor = true

export const useThemeColor = () => {
    return themeColor;
}

export const setThemeColor = (value) => {
    themeColor = value;
}