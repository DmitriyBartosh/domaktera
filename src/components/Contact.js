import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoLogoVk, IoLogoInstagram } from "react-icons/io5";

function Contact() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="contact">
        <div className="contact__left">
          <p>Билеты можно приобрести по адресу "Дом Актёра"</p>
          <div className="links">
            <p>Задать вопросы: <a href="tel:+73912277338">+7 (391) 227-73-38</a></p>
            <p>Режим работы с 10:00 до 22:00</p>
            <div className="social">
              <p>Мы в социальных сетях:</p>
              <a href="https://vk.com/dom_aktera_24" target="_blank"><IoLogoVk /> vk.com/dom_aktera_24</a>
              <a href="https://www.instagram.com/dom_aktera_24/" target="_blank"><IoLogoInstagram /> instagram.com/dom_aktera_24</a>
            </div>
          </div>
        </div>
        <div className="contact__right">
          <div className="adress">
            <p>Как добраться:</p>
            <a href="https://yandex.ru/maps/-/CCUiJGTI1D" target="_blank">г. Красноярск, ул. Бограда д. 26</a>
          </div>
          <div className="footer">
            <p>ООО "Дом Актёра"</p>
            <p>ИНН 24561413551 ОРГН 112412490815</p>
            <p>Сайт сделан простыми работягами</p>
          </div>
        </div>
        <div className="line" />
      </motion.div>
    </AnimatePresence>
  )
}

export default Contact
