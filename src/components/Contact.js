import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import useWindowDimensions from "../hooks/useWindowDimensions"
import { PathCircle, spring } from "../animation/contact"


function Contact({ isVisible }) {
  const { width, height } = useWindowDimensions();
  const [size, setSize] = useState(1000);

  useEffect(() => {
    function SizeWindow(width, height) {
      if (width > height) {
        return setSize(width);
      }
      else {
        return setSize(height);
      }
    }

    window.addEventListener('resize', () => {
      SizeWindow(width, height);
    });

  }, [width, height])

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionConfig transition={spring}>
          <motion.div
            variants={PathCircle}
            initial="hidden"
            animate="show"
            exit="hidden"
            custom={size}
            className="contact">
            <div className="contact__left">
              <div className="contactTitle">
                <h1>Дом<br /><span>Актёра</span></h1>
                <h2>Союз театральных<br />деятелей российской<br />федерации (всероссийское<br />театральное общество)</h2>
              </div>
              <div className="develop">
                <div className="realart">
                  <p>Над сайтом работала команда <a href="https://realart.studio/" target="_blank" rel="noreferrer">RealArt</a></p>
                </div>
                <div className="develop__links">
                  <div className="design">
                    <p>Дизайн</p>
                    <a href="https://www.instagram.com/shmidt__art/" target="_blank" rel="noreferrer">shmidt_art</a>
                  </div>
                  <div className="development">
                    <p>Разработка</p>
                    <a href="https://www.instagram.com/dm.bartosh/" target="_blank" rel="noreferrer">dm.bartosh</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact__right">
              <div className="ticket">
                <p>// Билеты можно приобрести<br />на кассах <a href="https://yandex.ru/maps/-/CCUiJGTI1D" target="_blank" rel="noreferrer">«Дом Актёра»</a></p>
              </div>
              <div className="info">
                <div className="info__block">
                  <div className="left">
                    <p>Как добраться?</p>
                  </div>
                  <div className="right">
                    <h2>г. Красноярск, Бограда 26</h2>
                    <h3>ОСТАНОВКА:<br />Театр Оперы и Балета</h3>
                    <p>
                      АВТОБУСЫ: 2, 3, 5, 6, 9, 30, 36, 37, 43, 50, 52, 55, 56, 65, 80, 90, 98<br />
                      ТРОЛЕЙБУС: 6
                    </p>
                  </div>
                </div>
                <div className="info__block">
                  <div className="left">
                    <p>Мы в соц.сетях</p>
                  </div>
                  <div className="right">
                    <a href="https://vk.com/dom_aktera_24" target="_blank" rel="noreferrer">Вконтакте</a>
                    <a href="https://www.instagram.com/dom_aktera_24/" target="_blank" rel="noreferrer">Инстаграм</a>
                    <a href="https://www.facebook.com/domaktera24" target="_blank" rel="noreferrer">Facebook</a>
                  </div>
                </div>
                <div className="info__block">
                  <div className="left">
                    <p>Задать вопрос</p>
                  </div>
                  <div className="right">
                    <a href="tel:+73912277338">+7 (391) 227-73-38</a>
                  </div>
                </div>
                <div className="info__block">
                  <div className="left">
                    <p>Режим работы</p>
                  </div>
                  <div className="right">
                    <p>10:00 - 22:00</p>
                  </div>
                </div>
              </div>
              <div className="footer">
                <p>КРАСНОЯРСКОЕ РЕГИОНАЛЬНОЕ ОТДЕЛЕНИЕ СТД РФ</p>
                <p>660000, Красноярск, Главпочтамт, аб/ящ 25253</p>
                <a href="mailto:kostd24@mail.ru" target="_blank" rel="noreferrer">kostd24@mail.ru</a>
              </div>
            </div>
          </motion.div>
        </MotionConfig>
      )}
    </AnimatePresence>
  )
}

export default Contact
