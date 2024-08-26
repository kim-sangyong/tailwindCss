/* <PortfolioPage className="jsx"></PortfolioPage> */
import React from 'react';
import MyImage from '../assets/images/MyPhoto.png';
import useDelayedVisibility from '../hooks/useDelayedVisibility';
import backgroundImage from '../assets/images/background.png';
function PortfolioPage() {
    const isVisible = useDelayedVisibility(1000);

    return (
    <div>
       <div className="bg-lightgray h-screen flex relative"
       style={{
        backgroundImage: `url(${backgroundImage})`, // 인라인 스타일로 백그라운드 이미지 설정
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }}
       >
       <p className="Dev">
           Front-end Developer
       </p>
       <p className={`My-name ${isVisible ? 'fade-in' : 'hidden'}`}>
           준비된 프론트엔드 개발자 김상용입니다.
       </p>                                                                                    
                                            {/* className="absolute transform -translate-x-1/2 left-1/2 bottom-0 w-[20%] grayscale Photo" alt="MyPhoto"/ */}
       <img src={MyImage} className="absolute transform -translate-x-1/2 left-1/2 bottom-0 w-[20%] Photo" alt="MyPhoto"/>
       </div>

       <main className="bg-white text-black p-5 text-center h-screen">
       <p>안녕하세요</p>
       </main>
    </div>
    );
}

export default PortfolioPage;