'use client';
import React, { use } from 'react'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'
import { useTranslation } from 'react-i18next';

export default function LangSwitch() {
    const {i18n, t} = useTranslation();
    const handleChangeLang = () => {
        i18n.changeLanguage(i18n.language === 'ko' ? 'en' : 'ko')
        // console.log(i18n.language, i18n.options);
    }
  return (
    <div className="flex items-center">
      <Switch id="airplane-mode" onClick={handleChangeLang}/>
      {/* <Switch id="airplane-mode"
      className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-400"
      checkedIcon={<FaCheck size={12} color="green" className="ml-1 mt-1" />}  // change the icons based on your need
      uncheckedIcon={<RxCross2 size={12} color="gray" className="ml-1 mt-1" />} // all the icons are taken from **react-icons** npm library 
      /> */}
      <Label htmlFor="airplane-mode">{t('common.button.change')}</Label>
    </div>
  )
}
