import React from 'react';

const Youtube = ({ ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.5281 11.1183C13.8533 10.9443 14.2478 10.9634 14.5547 11.168L20.5547 15.168C20.8329 15.3534 21 15.6656 21 16C21 16.3344 20.8329 16.6466 20.5547 16.8321L14.5547 20.8321C14.2478 21.0366 13.8533 21.0557 13.5281 20.8817C13.203 20.7077 13 20.3688 13 20V12C13 11.6312 13.203 11.2923 13.5281 11.1183ZM15 13.8685V18.1315L18.1972 16L15 13.8685Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.9985 5.04985L15.9816 5.0498L15.9188 5.04983C15.8643 5.04996 15.785 5.05035 15.6831 5.05143C15.4794 5.05359 15.1856 5.0585 14.8206 5.06945C14.0912 5.09135 13.0746 5.13749 11.9237 5.23466C9.64733 5.42685 6.74928 5.82571 4.51808 6.67823L4.50338 6.68398C4.06511 6.85941 3.6742 7.13539 3.36218 7.48966C3.05016 7.84393 2.82577 8.26657 2.70711 8.7235L2.70614 8.72726C2.39473 9.94582 2 12.2055 2 15.9999C2 19.7942 2.39473 22.0539 2.70614 23.2725L2.70711 23.2762C2.82577 23.7332 3.05016 24.1558 3.36218 24.5101C3.6742 24.8643 4.06511 25.1403 4.50338 25.3157L4.51808 25.3215C6.74928 26.174 9.64733 26.5729 11.9237 26.7651C13.0746 26.8622 14.0912 26.9084 14.8206 26.9303C15.1856 26.9412 15.4794 26.9461 15.6831 26.9483C15.785 26.9494 15.8643 26.9498 15.9188 26.9499L15.9816 26.9499L15.9985 26.9499H16.0015L16.0184 26.9499L16.0812 26.9499C16.1357 26.9498 16.215 26.9494 16.3169 26.9483C16.5206 26.9461 16.8144 26.9412 17.1794 26.9303C17.9088 26.9084 18.9254 26.8622 20.0763 26.7651C22.3527 26.5729 25.2507 26.174 27.4819 25.3215L27.4966 25.3157C27.9349 25.1403 28.3258 24.8643 28.6378 24.5101C28.9498 24.1558 29.1742 23.7332 29.2929 23.2762L29.2939 23.2725C29.6053 22.0539 30 19.7942 30 15.9999C30 12.2055 29.6053 9.94582 29.2939 8.72726L29.2929 8.7235C29.1742 8.26657 28.9498 7.84393 28.6378 7.48966C28.3258 7.13539 27.9349 6.85941 27.4966 6.68398L27.4819 6.67823C25.2507 5.82571 22.3527 5.42685 20.0763 5.23466C18.9254 5.13749 17.9088 5.09135 17.1794 5.06945C16.8144 5.0585 16.5206 5.05359 16.3169 5.05143C16.215 5.05035 16.1357 5.04996 16.0812 5.04983L16.0184 5.0498L16.0015 5.04985H15.9985ZM15.9947 24.9499L16.0054 24.9498L16.0086 24.9499L16.0217 24.9499L16.0767 24.9499C16.1259 24.9498 16.1996 24.9494 16.2957 24.9484C16.4877 24.9464 16.7686 24.9417 17.1194 24.9312C17.8216 24.9101 18.8011 24.8656 19.9081 24.7722C22.1441 24.5834 24.8041 24.2018 26.7596 23.4565C26.9044 23.3974 27.0336 23.3056 27.1369 23.1882C27.2414 23.0695 27.3167 22.928 27.3567 22.7751C27.6203 21.7429 28 19.6529 28 15.9999C28 12.3468 27.6203 10.2568 27.3567 9.22464C27.3167 9.07168 27.2414 8.9302 27.1369 8.81154C27.0336 8.69415 26.9044 8.60233 26.7596 8.54326C24.8041 7.79791 22.1441 7.41635 19.9081 7.22757C18.8011 7.13411 17.8216 7.08963 17.1194 7.06855C16.7686 7.05802 16.4877 7.05336 16.2957 7.05132C16.1996 7.0503 16.1259 7.04994 16.0767 7.04983L16.0217 7.0498L16.0086 7.04983L16.0058 7.04985L15.9946 7.04991L15.9914 7.04983L15.9783 7.0498L15.9233 7.04983C15.8741 7.04994 15.8004 7.0503 15.7043 7.05132C15.5123 7.05336 15.2314 7.05802 14.8806 7.06855C14.1784 7.08963 13.1989 7.13411 12.0919 7.22757C9.8559 7.41635 7.1959 7.79791 5.24039 8.54327C5.09561 8.60234 4.96645 8.69415 4.86306 8.81154C4.75855 8.9302 4.6833 9.07168 4.64331 9.22464C4.37974 10.2569 4 12.3468 4 15.9999C4 19.6529 4.37973 21.7429 4.6433 22.7751C4.68329 22.928 4.75855 23.0695 4.86306 23.1882C4.96645 23.3056 5.09561 23.3974 5.24038 23.4565C7.1959 24.2018 9.8559 24.5834 12.0919 24.7722C13.1989 24.8656 14.1784 24.9101 14.8806 24.9312C15.2314 24.9417 15.5123 24.9464 15.7043 24.9484C15.8004 24.9494 15.8741 24.9498 15.9233 24.9499L15.9783 24.9499L15.9914 24.9499L15.9947 24.9499Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Youtube;
