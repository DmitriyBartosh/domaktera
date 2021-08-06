import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { IoLogoVk, IoLogoInstagram } from "react-icons/io5"
import useWindowDimensions from "../hooks/useWindowDimensions"
import { PathCircle, item, Line, containerPhone, containerLink, containerInfo, spring } from "../animation/contact"

function Contact({ isVisible }) {
  const { width, height } = useWindowDimensions();
  const [offsetX, setoffsetX] = useState(50)
  const [size, setSize] = useState(1000);

  useEffect(() => {
    function SizeWindow(width, height) {
      if(width > height){ 
        return setSize(width);
      }
      else{
        return setSize(height);
      }
    }

    function OffsetX(width){
      if(width < 600){
        return setoffsetX(30);
      }
      else if(width < 1024){
        return setoffsetX(50);
      }
      else if(width < 1440){
        return setoffsetX(75);
      }
      else{
        return setoffsetX(100);
      }
    }

    SizeWindow(width, height);
    OffsetX(width);

    window.addEventListener('resize', () => {
      SizeWindow(width, height);
      OffsetX(width);
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
              <motion.p
                variants={item}
                initial="hidden"
                animate="show"
                exit="hidden"
                custom={offsetX}
                transition={{ type: "spring", duration: .3, damping: 40, delay: 0.3 }}
              >Билеты можно приобрести по адресу "Дом Актёра"
              </motion.p>
              <motion.div className="links"
                variants={containerPhone}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <motion.p variants={item} custom={offsetX}>Задать вопросы: <a href="tel:+73912277338">+7 (391) 227-73-38</a></motion.p>
                <motion.p variants={item} custom={offsetX}>Режим работы с 10:00 до 22:00</motion.p>
                <motion.div
                  variants={containerLink}
                  initial="hidden"
                  animate="show"
                  exit="hidden" 
                  className="social">
                  <motion.p variants={item} custom={offsetX}>Мы в социальных сетях:</motion.p>
                  <motion.a variants={item} custom={offsetX} href="https://vk.com/dom_aktera_24" target="_blank"><IoLogoVk /> vk.com/dom_aktera_24</motion.a>
                  <motion.a variants={item} custom={offsetX} href="https://www.instagram.com/dom_aktera_24/" target="_blank"><IoLogoInstagram /> instagram.com/dom_aktera_24</motion.a>
                </motion.div>
              </motion.div>
            </div>
            <div className="contact__right">
              <motion.div className="adress"
                variants={item}
                initial="hidden"
                animate="show"
                exit="hidden"
                custom={offsetX}
                transition={{ type: "spring", duration: .3, damping: 40, delay: 0.4 }}
              >
                <p>Как добраться:</p>
                <a href="https://yandex.ru/maps/-/CCUiJGTI1D" target="_blank">г. Красноярск, ул. Бограда д. 26</a>
              </motion.div>
              <motion.div className="footer"
                variants={containerInfo}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <motion.p variants={item} custom={offsetX}>ООО "Дом Актёра"</motion.p>
                <motion.p variants={item} custom={offsetX}>ИНН 24561413551 ОРГН 112412490815</motion.p>
                <motion.p variants={item} custom={offsetX}>Сайт сделан простыми работягами</motion.p>
              </motion.div>
            </div>
            <motion.div className="line"
              variants={Line}
              initial="hidden"
              animate="show"
              exit="hidden"
            />
          </motion.div>
        </MotionConfig>
      )}
    </AnimatePresence>
  )
}

export default Contact
