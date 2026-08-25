import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Obfuscate an email address for display by replacing "@" with " at ",
 * so spam harvesters can't scrape the plaintext address from the page.
 * The real address stays in data and in mailto:/clipboard usages.
 */
export function obfuscateEmail(email: string): string {
  return email.replace("@", " at ")
}
