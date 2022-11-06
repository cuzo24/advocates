import React from 'react';

// Hooks
import { usePageStateContext } from '../../hooks/usePageStateContext.jsx';

// Components
import PaginationButton from '../PaginationButton/PaginationButton.jsx';

// Styles
import { WrapperTop, WrapperBottom, ButtonsContainer } from './Pagination.styles.js';

export default function Pagination() {
  const DEFAULT_NUM_BUTTONS = 4;
  const { page, totalPages } = usePageStateContext();

  // Setting  up the number of buttons
  const numberOfButtons = Math.min(totalPages, DEFAULT_NUM_BUTTONS);

  const buttonElements = [];
  let firstButton;

  // Checking that at least there are '(numberOfButtons - 1)  / 2' pages
  // left to the right so that our  current page is at the middle
  if (totalPages - page >= Math.ceil((numberOfButtons - 1) / 2)) {
    // If the remaining number of buttons is greater than the pages before our current page,
    // we simply start from the page number 1
    firstButton = Math.max(1, page - Math.floor((numberOfButtons - 1) / 2));
  } else {
    // In  this case we take pages from  the end since our current page is closer than '(numberOfButtons - 1)  / 2' pages
    firstButton = totalPages - numberOfButtons + 1;
  }

  for (let i = firstButton; i < firstButton + numberOfButtons; i++) {
    const button = <PaginationButton pageNumber={i} active={i === page} key={i} />;
    buttonElements.push(button);
  }

  return (
    <div>
      <WrapperTop>
        <PaginationButton navigation available={page !== 1} text="Previous" previous />
        <ButtonsContainer>
          <PaginationButton navigation icon available={page !== 1} first>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.408 3.501C12.4716 3.43569 12.5477 3.38377 12.6317 3.34833C12.7156 3.31288 12.8059 3.29462 12.897 3.29462C12.9882 3.29462 13.0784 3.31288 13.1624 3.34833C13.2464 3.38377 13.3225 3.43569 13.386 3.501C13.5164 3.63488 13.5894 3.81437 13.5894 4.00125C13.5894 4.18813 13.5164 4.36762 13.386 4.5015L6.07655 11.9985L13.386 19.497C13.4518 19.5644 13.5037 19.644 13.5387 19.7314C13.5737 19.8189 13.5912 19.9123 13.5901 20.0065C13.589 20.1006 13.5693 20.1937 13.5322 20.2802C13.4952 20.3668 13.4414 20.4452 13.374 20.511C13.3099 20.5737 13.234 20.6232 13.1507 20.6565C13.0673 20.6898 12.9783 20.7064 12.8886 20.7053C12.7988 20.7042 12.7102 20.6854 12.6278 20.65C12.5453 20.6146 12.4706 20.5633 12.408 20.499L4.63505 12.522C4.49852 12.3819 4.42212 12.1941 4.42212 11.9985C4.42212 11.8029 4.49852 11.6151 4.63505 11.475L12.408 3.501V3.501ZM18.408 3.501C18.4716 3.43569 18.5477 3.38377 18.6317 3.34833C18.7156 3.31288 18.8059 3.29462 18.897 3.29462C18.9882 3.29462 19.0784 3.31288 19.1624 3.34833C19.2464 3.38377 19.3225 3.43569 19.386 3.501C19.5164 3.63488 19.5894 3.81437 19.5894 4.00125C19.5894 4.18813 19.5164 4.36762 19.386 4.5015L12.0765 11.9985L19.386 19.497C19.4518 19.5644 19.5037 19.644 19.5387 19.7314C19.5737 19.8189 19.5912 19.9123 19.5901 20.0065C19.589 20.1006 19.5693 20.1937 19.5322 20.2802C19.4952 20.3668 19.4414 20.4452 19.374 20.511C19.3099 20.5737 19.234 20.6232 19.1507 20.6565C19.0673 20.6898 18.9783 20.7064 18.8886 20.7053C18.7988 20.7042 18.7102 20.6854 18.6278 20.65C18.5453 20.6146 18.4706 20.5633 18.408 20.499L10.635 12.522C10.4985 12.3819 10.4221 12.1941 10.4221 11.9985C10.4221 11.8029 10.4985 11.6151 10.635 11.475L18.408 3.501V3.501Z" fill="#585858" />
            </svg>
          </PaginationButton>
          {buttonElements}
          <PaginationButton navigation icon available={page !== totalPages}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.614 3.49949C10.6777 3.43427 10.7538 3.38248 10.8378 3.34716C10.9219 3.31184 11.0121 3.29371 11.1033 3.29385C11.1945 3.29399 11.2847 3.3124 11.3686 3.34797C11.4525 3.38355 11.5285 3.43558 11.592 3.50099L19.365 11.4765C19.5015 11.6166 19.5779 11.8044 19.5779 12C19.5779 12.1956 19.5015 12.3834 19.365 12.5235L11.592 20.499C11.5284 20.5643 11.4524 20.6162 11.3684 20.6517C11.2844 20.6871 11.1942 20.7054 11.103 20.7054C11.0118 20.7054 10.9216 20.6871 10.8376 20.6517C10.7536 20.6162 10.6776 20.5643 10.614 20.499C10.4832 20.365 10.4099 20.1852 10.4099 19.998C10.4099 19.8107 10.4832 19.6309 10.614 19.497L17.9235 12L10.614 4.49999C10.4836 4.36611 10.4106 4.18662 10.4106 3.99974C10.4106 3.81286 10.4836 3.63337 10.614 3.49949V3.49949ZM4.61399 3.49949C4.67769 3.43427 4.7538 3.38248 4.83784 3.34716C4.92188 3.31184 5.01215 3.29371 5.10331 3.29385C5.19447 3.29399 5.28468 3.3124 5.36861 3.34797C5.45254 3.38355 5.5285 3.43558 5.59199 3.50099L13.365 11.4765C13.5015 11.6166 13.5779 11.8044 13.5779 12C13.5779 12.1956 13.5015 12.3834 13.365 12.5235L5.59199 20.499C5.5284 20.5643 5.45236 20.6162 5.36838 20.6517C5.28439 20.6871 5.19415 20.7054 5.10299 20.7054C5.01183 20.7054 4.92159 20.6871 4.83761 20.6517C4.75362 20.6162 4.67759 20.5643 4.61399 20.499C4.48316 20.365 4.40991 20.1852 4.40991 19.998C4.40991 19.8107 4.48316 19.6309 4.61399 19.497L11.9235 12L4.61399 4.49999C4.48361 4.36611 4.41064 4.18662 4.41064 3.99974C4.41064 3.81286 4.48361 3.63337 4.61399 3.49949V3.49949Z" fill="#585858" />
            </svg>
          </PaginationButton>
        </ButtonsContainer>
        <PaginationButton navigation available={page !== totalPages} text="Next" />
      </WrapperTop>
      <WrapperBottom>
        Page {page} of {totalPages}
      </WrapperBottom>
    </div>
  );
}