type Props = {
  className?: string
}

export const DiscordIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg className={className} width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.3179 1.48761C18.7931 0.791793 17.1483 0.287925 15.4315 0C15.3955 0 15.3715 0.0119969 15.3474 0.0359906C15.1313 0.407893 14.9032 0.887768 14.7351 1.25967C12.8862 0.983743 11.0493 0.983743 9.24847 1.25967C9.09239 0.875771 8.85227 0.407893 8.63617 0.0359906C8.62416 0.0119969 8.58815 0 8.56413 0C6.8473 0.287925 5.2025 0.80379 3.67775 1.48761C3.66575 1.48761 3.65374 1.49961 3.64173 1.5116C0.532218 6.08241 -0.320198 10.5452 0.100007 14.9481C0.100007 14.9721 0.112013 14.9961 0.136025 15.0081C2.17702 16.4957 4.16999 17.3954 6.11494 17.9953C6.15096 18.0073 6.17497 17.9953 6.19898 17.9713C6.6552 17.3475 7.07541 16.6996 7.42358 16.0038C7.44759 15.9678 7.42358 15.9198 7.38756 15.8958C6.73924 15.6559 6.11494 15.356 5.51465 15.0201C5.46662 14.9961 5.46662 14.9241 5.50264 14.9001C5.6227 14.8041 5.75476 14.7082 5.87482 14.6122C5.89883 14.6002 5.92285 14.5882 5.94686 14.6002C9.87277 16.3637 14.1349 16.3637 18.0127 14.6002C18.0368 14.5882 18.0728 14.5882 18.0968 14.6122C18.2168 14.7082 18.3369 14.8041 18.469 14.9001C18.517 14.9361 18.505 14.9961 18.457 15.0201C17.8567 15.368 17.2324 15.6559 16.584 15.8958C16.536 15.9078 16.524 15.9558 16.548 16.0038C16.9082 16.6876 17.3164 17.3475 17.7726 17.9593C17.7966 17.9833 17.8206 17.9953 17.8567 17.9833C19.8136 17.3835 21.8066 16.4837 23.8596 15.0081C23.8716 14.9961 23.8836 14.9721 23.8956 14.9481C24.3999 9.84942 23.0552 5.43458 20.3419 1.5116C20.3419 1.5116 20.3299 1.49961 20.3179 1.48761ZM8.01186 12.2728C6.82328 12.2728 5.85081 11.2051 5.85081 9.89741C5.85081 8.58975 6.81128 7.52203 8.01186 7.52203C9.22446 7.52203 10.1849 8.60175 10.1729 9.89741C10.1729 11.2051 9.21245 12.2728 8.01186 12.2728ZM15.9958 12.2728C14.8072 12.2728 13.8347 11.2051 13.8347 9.89741C13.8347 8.58975 14.7952 7.52203 15.9958 7.52203C17.2083 7.52203 18.1688 8.60175 18.1568 9.89741C18.1568 11.2051 17.2083 12.2728 15.9958 12.2728Z"
        fill="currentColor"
      />
    </svg>
  )
}