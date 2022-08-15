import React, { useState } from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import "./calendar.css";
import Navbar from "../nav/navbar";

const SolarCalendar = () => {
  const [selectedDay, setSelectedDay] = useState();

  const showHolidays = () => {
    if (selectedDay) {
      if (selectedDay.month === 1) {
        return (
          <>
            <h1 className="events-title">مناسبت های ماه فروردین</h1>
            <hr />
            <span className="events holiday">
              <b>1 فروردین </b>
              جشن نوروز/جشن سال نو{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>2 فروردین </b>
              عیدنوروز{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>3 فروردین </b>
              عیدنوروز{" "}
            </span>
            <br />
            <span className="events">
              <b>3 فروردین </b>
              روز جهانی هواشناسی [ 23 March ]{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>4 فروردین </b>
              عیدنوروز{" "}
            </span>
            <br />
            <span className="events">
              <b>6 فروردین </b>
              روز امید، روز شادباش نویسی{" "}
            </span>
            <br />
            <span className="events">
              <b>6 فروردین </b>
              زادروز آشو زرتشت، اَبَراِنسان بزرگ تاریخ{" "}
            </span>
            <br />
            <span className="events">
              <b>7 فروردین </b>
              روز جهانی تئاتر [ 27 March ]{" "}
            </span>
            <br />
            <span className="events">
              <b>10 فروردین </b>
              جشن آبانگاه{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>12 فروردین </b>
              روز جمهوری اسلامی{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>13 فروردین </b>
              جشن سیزده به در{" "}
            </span>
            <br />
            <span className="events">
              <b>17 فروردین </b>
              سروش روز،جشن سروشگان{" "}
            </span>
            <br />
            <span className="events">
              <b>18 فروردین </b>
              روز جهانی بهداشت [ 7 April ]{" "}
            </span>
            <br />
            <span className="events">
              <b>19 فروردین </b>
              فروردین روز،جشن فروردینگان{" "}
            </span>
            <br />
            <span className="events">
              <b>23 فروردین </b>
              روز دندانپزشک{" "}
            </span>
            <br />
            <span className="events">
              <b>25 فروردین </b>
              روز بزرگداشت عطار نیشابوری{" "}
            </span>
            <br />
            <span className="events">
              <b>28 فروردین </b>
              ولادت امام حسن مجتبی علیه السلام [ ١٥ رمضان ]{" "}
            </span>
            <br />
            <span className="events">
              <b>29 فروردین </b>
              روز ارتش جمهوری اسلامی ایران{" "}
            </span>
            <br />
            <span className="events">
              <b>30 فروردین </b>
              روز علوم آزمایشگاهی، زاد روز حکیم سید اسماعیل جرجانی{" "}
            </span>
            <br />
            <span className="events">
              <b>31 فروردین </b>
              شب قدر [ ١٨ رمضان ]{" "}
            </span>
            <br />
          </>
        );
      } else if (selectedDay.month === 2) {
        return (
          <>
            <h1 className="events-title">مناسبت های ماه اردیبهشت</h1>
            <hr />
            <span className="events">
              <b>1 اردیبهشت </b>
              روز بزرگداشت سعدی{" "}
            </span>
            <br />
            <span className="events">
              <b>1 اردیبهشت </b>
              ضربت خوردن حضرت علی علیه السلام [ ١٩ رمضان ]{" "}
            </span>
            <br />
            <span className="events">
              <b>2 اردیبهشت </b>
              جشن گیاه آوری؛ روز زمین [ 22 April ]{" "}
            </span>
            <br />
            <span className="events">
              <b>3 اردیبهشت </b>
              روزبزرگداشت شیخ بهایی؛ روزملی کارآفرینی؛ روز معماری{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>3 اردیبهشت </b>
              شهادت حضرت علی علیه السلام [ ٢١ رمضان ]{" "}
            </span>
            <br />
            <span className="events">
              <b>4 اردیبهشت </b>
              شب قدر [ ٢٢ رمضان ]{" "}
            </span>
            <br />
            <span className="events">
              <b>7 اردیبهشت </b>
              روز جهانی طراحی و گرافیک [ 27 April ]{" "}
            </span>
            <br />
            <span className="events">
              <b>9 اردیبهشت </b>
              روزشوراها{" "}
            </span>
            <br />
            <span className="events">
              <b>9 اردیبهشت </b>
              روز ملی روانشناس و مشاور{" "}
            </span>
            <br />
            <span className="events">
              <b>10 اردیبهشت </b>
              جشن چهلم نوروز؛ روز ملی خلیج فارس{" "}
            </span>
            <br />
            <span className="events">
              <b>11 اردیبهشت </b>
              روزجهانی کارگر [ 1 May ]{" "}
            </span>
            <br />
            <span className="events">
              <b>12 اردیبهشت </b>
              روز معلم{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>13 اردیبهشت </b>
              عید سعید فطر [ ١ شوال ]{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>14 اردیبهشت </b>
              تعطیل به مناسبت عید سعید فطر [ ٢ شوال ]{" "}
            </span>
            <br />
            <span className="events">
              <b>15 اردیبهشت </b>
              جشن میانه بهار/جشن بهاربد؛ روز شیراز{" "}
            </span>
            <br />
            <span className="events">
              <b>15 اردیبهشت </b>
              روز جهانی ماما [ 5 May ]{" "}
            </span>
            <br />
            <span className="events">
              <b>18 اردیبهشت </b>
              روز جهانی صلیب سرخ و هلال احمر [ 8 May ]{" "}
            </span>
            <br />
            <span className="events">
              <b>22 اردیبهشت </b>
              زادروز مریم میرزاخانی ریاضیدان ایرانی، روز جهانی زن در ریاضیات{" "}
            </span>
            <br />
            <span className="events">
              <b>25 اردیبهشت </b>
              روز بزرگداشت فردوسی{" "}
            </span>
            <br />
            <span className="events">
              <b>27 اردیبهشت </b>
              روز ارتباطات و روابط عمومی{" "}
            </span>
            <br />
            <span className="events">
              <b>28 اردیبهشت </b>
              روز بزرگداشت حکیم عمر خیام{" "}
            </span>
            <br />
            <span className="events">
              <b>28 اردیبهشت </b>
              روز جهانی موزه و میراث فرهنگی [ 18 May ]{" "}
            </span>
            <br />
          </>
        );
      } else if (selectedDay.month === 3) {
        return (
          <>
            <h1 className="events-title">مناسبت های ماه خرداد</h1>
            <hr />
            <span className="events">
              <b>1 خرداد </b>
              روز بهره وری و بهینه سازی مصرف{" "}
            </span>
            <br />
            <span className="events">
              <b>1 خرداد </b>
              روز بزرگداشت ملاصدرا{" "}
            </span>
            <br />
            <span className="events">
              <b>3 خرداد </b>
              فتح خرمشهر در عملیات بیت المقدس و روز مقاومت، ایثار و پیروزی{" "}
            </span>
            <br />
            <span className="events">
              <b>4 خرداد </b>
              روز دزفول، روز مقاومت و پایداری{" "}
            </span>
            <br />
            <span className="events">
              <b>6 خرداد </b>
              خرداد روز،جشن خردادگان{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>6 خرداد </b>
              شهادت امام جعفر صادق علیه السلام [ ٢٥ شوال ]{" "}
            </span>
            <br />
            <span className="events">
              <b>10 خرداد </b>
              روز جهانی بدون دخانیات [ 31 May ]{" "}
            </span>
            <br />
            <span className="events">
              <b>11 خرداد </b>
              ولادت حضرت معصومه سلام الله علیها و روز دختران [ ١ ذوالقعده ]{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>14 خرداد </b>
              رحلت حضرت امام خمینی{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>15 خرداد </b>
              قیام 15 خرداد{" "}
            </span>
            <br />
            <span className="events">
              <b>15 خرداد </b>
              روز جهانی محیط زیست [ 5 June ]{" "}
            </span>
            <br />
            <span className="events">
              <b>20 خرداد </b>
              روز جهانی صنایع دستی [ 10 June ]{" "}
            </span>
            <br />
            <span className="events">
              <b>21 خرداد </b>
              ولادت امام رضا علیه السلام [ ١١ ذوالقعده ]{" "}
            </span>
            <br />
            <span className="events">
              <b>22 خرداد </b>
              روز جهانی مبارزه با کار کودکان [ 12 June ]{" "}
            </span>
            <br />
            <span className="events">
              <b>24 خرداد </b>
              روز جهانی اهدای خون [ 14 June ]{" "}
            </span>
            <br />
            <span className="events">
              <b>25 خرداد </b>
              روز ملی گل وگیاه{" "}
            </span>
            <br />
            <span className="events">
              <b>27 خرداد </b>
              روز جهاد کشاورزی{" "}
            </span>
            <br />
            <span className="events">
              <b>27 خرداد </b>
              روز جهانی بیابان زدایی [ 17 June ]{" "}
            </span>
            <br />
          </>
        );
      } else if (selectedDay.month === 4) {
        return (
          <>
            <h1 className="events-title">مناسبت های ماه تیر</h1>
            <hr />
            <span className="events">
              <b>1 تیر </b>
              جشن آب پاشونک، جشن آغاز تابستان
            </span>
            <br />
            <span className="events">
              <b>1 تیر </b>
              روز اصناف{" "}
            </span>
            <br />
            <span className="events">
              <b>5 تیر </b>
              روز جهانی مبارزه با مواد مخدر [ 26 June ]{" "}
            </span>
            <br />
            <span className="events">
              <b>7 تیر </b>
              انفجار دفتر حزب جمهوری اسلامی و شهادت دکتر بهشتی و 72 نفر از اعضای
              حزب؛ روز قوه قضاییه{" "}
            </span>
            <br />
            <span className="events">
              <b>8 تیر </b>
              روز مبارزه با سلاح های شیمیایی و میکروبی{" "}
            </span>
            <br />
            <span className="events">
              <b>9 تیر </b>
              شهادت امام محمد تقی علیه السلام [ ٣٠ ذوالقعده ]{" "}
            </span>
            <br />
            <span className="events">
              <b>10 تیر </b>
              روز صنعت و معدن{" "}
            </span>
            <br />
            <span className="events">
              <b>12 تیر </b>
              شلیک به پرواز 655 ایران ایر توسط ناو وینسنس [ 1367 خورشیدی ]{" "}
            </span>
            <br />
            <span className="events">
              <b>13 تیر </b>
              تیر روز،جشن تیرگان{" "}
            </span>
            <br />
            <span className="events">
              <b>14 تیر </b>
              روز قلم{" "}
            </span>
            <br />
            <span className="events">
              <b>15 تیر </b>
              جشن خام خواری{" "}
            </span>
            <br />
            <span className="events">
              <b>16 تیر </b>
              شهادت امام محمد باقر علیه السلام [ ٧ ذوالحجه ]{" "}
            </span>
            <br />
            <span className="events">
              <b>18 تیر </b>
              روز عرفه [ ٩ ذوالحجه ]{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>19 تیر </b>
              عید سعید قربان [ ١٠ ذوالحجه ]{" "}
            </span>
            <br />
            <span className="events">
              <b>22 تیر </b>
              زادروز محمد خوارزمی، ریاضیدان و فیلسوف ایرانی و روز ملی فناوری
              اطلاعات{" "}
            </span>
            <br />
            <span className="events">
              <b>24 تیر </b>
              ولادت امام علی النقی الهادی علیه السلام [ ١٥ ذوالحجه ]{" "}
            </span>
            <br />
            <span className="events">
              <b>25 تیر </b>
              روز بهزیستی و تامین اجتماعی{" "}
            </span>
            <br />
            <span className="events">
              <b>27 تیر </b>
              اعلام پذیرش قطعنامه 598 شورای امنیت از سوی ایران [ 1367 خورشیدی ]{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>27 تیر </b>
              عید سعید غدیر خم [ ١٨ ذوالحجه ]{" "}
            </span>
            <br />
            <span className="events">
              <b>29 تیر </b>
              ولادت امام موسی کاظم علیه السلام [ ٢٠ ذوالحجه ]{" "}
            </span>
            <br />
          </>
        );
      } else if (selectedDay.month === 5) {
        return (
          <>
            <h1 className="events-title">مناسبت های ماه مرداد</h1>
            <hr />
            <span className="events">
              <b>6 مرداد </b>روز ترویج آموزش های فنی و حرفه ای
            </span>
            <br />
            <span className="events">
              <b>7 مرداد </b>
              مرداد روز،جشن مردادگان
            </span>
            <br />
            <span className="events">
              <b>8 مرداد </b>
              روز بزرگداشت شیخ شهاب الدین سهروردی
            </span>
            <br />
            <span className="events">
              <b>10 مرداد </b>
              جشن چله تابستان
            </span>
            <br />
            <span className="events">
              <b>10 مرداد </b>
              آغاز هفته جهانی شیردهی [ 1 August ]{" "}
            </span>
            <br />
            <span className="events">
              <b>14 مرداد </b>
              صدور فرمان مشروطیت
            </span>
            <br />
            <span className="events holiday">
              <b>16 مرداد </b>
              تاسوعای حسینی [ ٩ محرم ]{" "}
            </span>
            <br />
            <span className="events">
              <b>17 مرداد </b>
              روز خبرنگار
            </span>
            <br />
            <span className="events holiday">
              <b>17 مرداد </b>
              عاشورای حسینی [ ١٠ محرم ]{" "}
            </span>
            <br />
            <span className="events">
              <b>19 مرداد </b>
              شهادت امام زین العابدین علیه السلام [ ١٢ محرم ]{" "}
            </span>
            <br />
            <span className="events">
              <b>22 مرداد </b>
              وز جهانی چپ دست ها [ 13 August ]{" "}
            </span>
            <br />
            <span className="events">
              <b>28 مرداد </b>
              سالروز وقایع 28 مرداد و برکناری دکتر محمد مصدق
            </span>
            <br />
            <span className="events">
              <b>28 مرداد </b>
              سالروز فاجعه آتش زدن سینما رکس آبادان
            </span>
            <br />
            <span className="events">
              <b>28 مرداد </b>
              روز جهانی عکاسی [ 19 August ]{" "}
            </span>
            <br />
          </>
        );
      } else if (selectedDay.month === 6) {
        return (
          <>
            <h1 className="events-title">مناسبت های ماه شهریور</h1>
            <hr />
            <span className="events">
              <b>1 شهریور </b>
              روز بزرگداشت ابوعلی سینا و روز پزشک{" "}
            </span>
            <br />
            <span className="events">
              <b>2 شهریور </b>
              آغاز هفته دولت{" "}
            </span>
            <br />
            <span className="events">
              <b>4 شهریور </b>
              زادروز داراب (کوروش){" "}
            </span>
            <br />
            <span className="events">
              <b>4 شهریور </b>
              شهریور روز،جشن شهریورگان{" "}
            </span>
            <br />
            <span className="events">
              <b>4 شهریور </b>
              روز کارمند{" "}
            </span>
            <br />
            <span className="events">
              <b>5 شهریور </b>
              روز بزرگداشت محمدبن زکریای رازی و روز داروساز{" "}
            </span>
            <br />
            <span className="events">
              <b>8 شهریور </b>
              انفجار در دفتر نخست‌وزیری جمهوری اسلامی ایران، روز مبارزه با
              تروریسم{" "}
            </span>
            <br />
            <span className="events">
              <b>11 شهریور </b>
              روزصنعت چاپ{" "}
            </span>
            <br />
            <span className="events">
              <b>13 شهریور </b>
              روز بزرگداشت ابوریحان بیرونی{" "}
            </span>
            <br />
            <span className="events">
              <b>13 شهریور </b>
              روز تعاون{" "}
            </span>
            <br />
            <span className="events">
              <b>17 شهریور </b>
              قیام 17 شهریور{" "}
            </span>
            <br />
            <span className="events">
              <b>19 شهریور </b>
              درگذشت آیت الله سید محمود طالقانی{" "}
            </span>
            <br />
            <span className="events">
              <b>19 شهریور </b>
              روز جهانی پیشگیری از خودکشی [ 10 September ]{" "}
            </span>
            <br />
            <span className="events">
              <b>20 شهریور </b>
              حمله به برج‌های دوقلوی مرکز تجارت جهانی [ 11 September ]{" "}
            </span>
            <br />
            <span className="events">
              <b>21 شهریور </b>
              روز سینما{" "}
            </span>
            <br />
            <span className="events">
              <b>22 شهریور </b>
              روز گرامیداشت برنامه نویسان [ 13 September ]{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>26 شهریور </b>
              اربعین حسینی [ ٢٠ صفر ]{" "}
            </span>
            <br />
            <span className="events">
              <b>27 شهریور </b>
              روز شعر و ادب پارسی و روز بزرگداشت استاد شهریار{" "}
            </span>
            <br />
            <span className="events">
              <b>30 شهریور </b>
              روز گفتگوی تمدنها{" "}
            </span>
            <br />
            <span className="events">
              <b>30 شهریور </b>
              روز جهانی صلح [ 21 September ]
            </span>
            <br />
            <span className="events">
              <b>31 شهریور </b>
              آغاز هفته دفاع مقدس{" "}
            </span>
            <br />
          </>
        );
      } else if (selectedDay.month === 7) {
        return (
          <>
            <h1 className="events-title">مناسبت های ماه مهر</h1>
            <hr />
            <span className="events">
              <b>1 مهر </b>
              آغاز حمله مغول به ایران در پاییز 598 خورشیدی{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>3 مهر </b>
              رحلت رسول اکرم؛شهادت امام حسن مجتبی علیه السلام [ ٢٨ صفر ]{" "}
            </span>
            <br />
            <span className="events">
              <b>5 مهر </b>
              روز جهانی جهانگردی [ 27 September ]{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>5 مهر </b>
              شهادت امام رضا علیه السلام [ ٣٠ صفر ]{" "}
            </span>
            <br />
            <span className="events">
              <b>6 مهر </b>
              هجرت پیامبر اکرم از مکه به مدینه [ ١ ربيع الاول ]{" "}
            </span>
            <br />
            <span className="events">
              <b>7 مهر </b>
              روز آتش نشانی و ایمنی{" "}
            </span>
            <br />
            <span className="events">
              <b>7 مهر </b>
              سقوط هواپیمای حامل جمعی از فرماندهان جنگ (کلاهدوز، نامجو، فلاحی،
              فکوری، جهان آرا) در سال 1360{" "}
            </span>
            <br />
            <span className="events">
              <b>8 مهر </b>
              روزبزرگداشت مولوی{" "}
            </span>
            <br />
            <span className="events">
              <b>8 مهر </b>
              روز جهانی ناشنوایان [ 30 September ]{" "}
            </span>
            <br />
            <span className="events">
              <b>8 مهر </b>
              روز جهانی ترجمه و مترجم [ 30 September ]{" "}
            </span>
            <br />
            <span className="events">
              <b>9 مهر </b>
              روز جهانی سالمندان [ 1 October ]{" "}
            </span>
            <br />
            <span className="events">
              <b>10 مهر </b>
              مهر روز،جشن مهرگان{" "}
            </span>
            <br />
            <span className="events">
              <b>13 مهر </b>
              روز نیروی انتظامی{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>13 مهر </b>
              شهادت امام حسن عسکری علیه السلام [ ٨ ربيع الاول ]{" "}
            </span>
            <br />
            <span className="events">
              <b>13 مهر </b>
              روز جهانی معلم [ 5 October ]{" "}
            </span>
            <br />
            <span className="events">
              <b>14 مهر </b>
              روز دامپزشکی{" "}
            </span>
            <br />
            <span className="events">
              <b>16 مهر </b>
              روز ملی کودک{" "}
            </span>
            <br />
            <span className="events">
              <b>17 مهر </b>
              میلاد رسول اکرم به روایت اهل سنت [ ١٢ ربيع الاول ]{" "}
            </span>
            <br />
            <span className="events">
              <b>17 مهر </b>
              روز جهانی پست [ 9 October ]{" "}
            </span>
            <br />
            <span className="events">
              <b>18 مهر </b>
              روز جهانی مبارزه با حکم اعدام [ 10 October ]{" "}
            </span>
            <br />
            <span className="events">
              <b>19 مهر </b>
              روز جهانی دختر [ 11 October ]{" "}
            </span>
            <br />
            <span className="events">
              <b>20 مهر </b>
              روز بزرگداشت حافظ{" "}
            </span>
            <br />
            <span className="events">
              <b>21 مهر </b>
              جشن پیروزی کاوه و فریدون{" "}
            </span>
            <br />
            <span className="events">
              <b>22 مهر </b>
              روز جهانی استاندارد [ 14 October ]{" "}
            </span>
            <br />
            <span className="events">
              <b>22 مهر </b>
              میلاد رسول اکرم و امام جعفر صادق علیه السلام [ ١٧ ربيع الاول ]{" "}
            </span>
            <br />
            <span className="events">
              <b>23 مهر </b>
              روز جهانی عصای سفید [ 15 October ]{" "}
            </span>
            <br />
            <span className="events">
              <b>24 مهر </b>
              روز جهانی غذا [ 16 October ]{" "}
            </span>
            <br />
            <span className="events">
              <b>25 مهر </b>
              روز جهانی ریشه کنی فقر [ 17 October ]{" "}
            </span>
            <br />
            <span className="events">
              <b>26 مهر </b>
              روز تربیت بدنی و ورزش{" "}
            </span>
            <br />
            <span className="events">
              <b>29 مهر </b>
              روز ملی کوهنورد{" "}
            </span>
            <br />
          </>
        );
      } else if (selectedDay.month === 8) {
        return (
          <>
            <h1 className="events-title">مناسبت های ماه آبان</h1>
            <hr />
            <span className="events">
              <b>1 آبان </b>
              روز آمار و برنامه ریزی{" "}
            </span>
            <br />
            <span className="events">
              <b>7 آبان </b>
              سالروز ورود کوروش بزرگ به بابل در سال 539 پیش از میلاد{" "}
            </span>
            <br />
            <span className="events">
              <b>8 آبان </b>
              روز نوجوان{" "}
            </span>
            <br />
            <span className="events">
              <b>10 آبان </b>
              آبان روز، جشن آبانگان{" "}
            </span>
            <br />
            <span className="events">
              <b>12 آبان </b>
              ولادت امام حسن عسکری علیه السلام [ ٨ ربيع الثاني ]{" "}
            </span>
            <br />
            <span className="events">
              <b>13 آبان </b>
              روز دانش آموز{" "}
            </span>
            <br />
            <span className="events">
              <b>14 آبان </b>
              روز فرهنگ عمومی{" "}
            </span>
            <br />
            <span className="events">
              <b>14 آبان </b>
              وفات حضرت معصومه سلام الله علیها [ ١٠ ربيع الثاني ]{" "}
            </span>
            <br />
            <span className="events">
              <b>15 آبان </b>
              جشن میانه پاییز{" "}
            </span>
            <br />
            <span className="events">
              <b>18 آبان </b>
              روز ملی کیفیت{" "}
            </span>
            <br />
            <span className="events">
              <b>23 آبان </b>
              روز جهانی دیابت [ 14 November ]{" "}
            </span>
            <br />
            <span className="events">
              <b>24 آبان </b>
              روز کتاب و کتابخوانی{" "}
            </span>
            <br />
            <span className="events">
              <b>27 آبان </b>
              روز جهانی فلسفه [ 18 November ]{" "}
            </span>
            <br />
            <span className="events">
              <b>28 آبان </b>
              روز جهانی آقایان [ 19 November ]{" "}
            </span>
            <br />
            <span className="events">
              <b>29 آبان </b>
              روز جهانی کودک [ 20 November ]{" "}
            </span>
            <br />
          </>
        );
      } else if (selectedDay.month === 9) {
        return (
          <>
            <h1 className="events-title">مناسبت های ماه آذر</h1>
            <hr />
            <span className="events">
              <b>1 آذر </b>
              آذر جشن{" "}
            </span>
            <br />
            <span className="events">
              <b>4 آذر </b>
              روز جهانی مبارزه با خشونت علیه زنان [ 25 November ]{" "}
            </span>
            <br />
            <span className="events">
              <b>5 آذر </b>
              روز بسیج مستضعفان{" "}
            </span>
            <br />
            <span className="events">
              <b>7 آذر </b>
              روز نیروی دریایی{" "}
            </span>
            <br />
            <span className="events">
              <b>9 آذر </b>
              جشن آذرگان ،آذر روز{" "}
            </span>
            <br />
            <span className="events">
              <b>9 آذر </b>
              ولادت حضرت زینب سلام الله علیها و روز پرستار و بهورز [ ٥ جمادي
              الاولي ]{" "}
            </span>
            <br />
            <span className="events">
              <b>10 آذر </b>
              روز مجلس{" "}
            </span>
            <br />
            <span className="events">
              <b>10 آذر </b>
              روز جهانی ایدز [ 1 December ]{" "}
            </span>
            <br />
            <span className="events">
              <b>12 آذر </b>
              روز جهانی معلولان [ 3 December ]{" "}
            </span>
            <br />
            <span className="events">
              <b>13 آذر </b>
              روز بیمه{" "}
            </span>
            <br />
            <span className="events">
              <b>15 آذر </b>
              روز حسابدار{" "}
            </span>
            <br />
            <span className="events">
              <b>16 آذر </b>
              روز دانشجو{" "}
            </span>
            <br />
            <span className="events">
              <b>20 آذر </b>
              روز جهانی کوه نوردی [ 11 December ]{" "}
            </span>
            <br />
            <span className="events">
              <b>25 آذر </b>
              روز پژوهش{" "}
            </span>
            <br />
            <span className="events">
              <b>26 آذر </b>
              روز حمل و نقل{" "}
            </span>
            <br />
            <span className="events">
              <b>30 آذر </b>
              جشن شب یلدا{" "}
            </span>
            <br />
          </>
        );
      } else if (selectedDay.month === 10) {
        return (
          <>
            <h1 className="events-title">مناسبت های ماه دی</h1>
            <hr />
            <span className="events">
              <b>1 دی </b>
              روز میلاد خورشید؛ جشن خرم روز، نخستین جشن دیگان{" "}
            </span>
            <br />
            <span className="events">
              <b>4 دی </b>
              جشن کریسمس [ 25 December ]{" "}
            </span>
            <br />
            <span className="events">
              <b>4 دی </b>
              روز بزرگداشت دوستی [ 25 December ]{" "}
            </span>
            <br />
            <span className="events">
              <b>5 دی </b>
              زمین لرزه ی بم [1382 خورشیدی]{" "}
            </span>
            <br />
            <span className="events">
              <b>5 دی </b>
              سالروز شهادت آشو زرتشت، اَبَراِنسان بزرگ تاریخ{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>6 دی </b>
              شهادت حضرت فاطمه زهرا سلام الله علیها [ ٣ جمادي الثانيه ]{" "}
            </span>
            <br />
            <span className="events">
              <b>8 دی </b>
              دی به آذر روز، دومین جشن دیگان{" "}
            </span>
            <br />
            <span className="events">
              <b>11 دی </b>
              جشن آغاز سال نو میلادی [ 1 January ]{" "}
            </span>
            <br />
            <span className="events">
              <b>13 دی </b>
              شهادت سردار حاج قاسم سلیمانی [1398 خورشیدی]{" "}
            </span>
            <br />
            <span className="events">
              <b>15 دی </b>
              دی به مهر روز، سومین جشن دیگان{" "}
            </span>
            <br />
            <span className="events">
              <b>16 دی </b>
              غرق شدن کشتی سانچی [1396 خورشیدی]{" "}
            </span>
            <br />
            <span className="events">
              <b>18 دی </b>
              شلیک به پرواز 752 هواپیمایی اوکراین [1398 خورشیدی]{" "}
            </span>
            <br />
            <span className="events">
              <b>19 دی </b>
              درگذشت اکبر هاشمی رفسنجانی [1395 خورشیدی]{" "}
            </span>
            <br />
            <span className="events">
              <b>20 دی </b>
              قتل امیرکبیر به دستور ناصرالدین شاه قاجار [1230 خورشیدی]{" "}
            </span>
            <br />
            <span className="events">
              <b>23 دی </b>
              دی به دین روز، چهارمین جشن دیگان{" "}
            </span>
            <br />
            <span className="events">
              <b>23 دی </b>
              ولادت حضرت فاطمه زهرا سلام الله علیها و روز مادر [ ٢٠ جمادي
              الثانيه ]{" "}
            </span>
            <br />
            <span className="events">
              <b>30 دی </b>
              آتش‌سوزی و فروریختن ساختمان پلاسکو [1395 خورشیدی]{" "}
            </span>
            <br />
          </>
        );
      } else if (selectedDay.month === 11) {
        return (
          <>
            <h1 className="events-title">مناسبت های ماه بهمن</h1>
            <hr />
            <span className="events">
              <b>1 بهمن </b>
              زادروز فردوسی{" "}
            </span>
            <br />
            <span className="events">
              <b>2 بهمن </b>
              بهمن روز، جشن بهمنگان{" "}
            </span>
            <br />
            <span className="events">
              <b>3 بهمن </b>
              ولادت امام محمد باقر علیه السلام [ ١ رجب ]{" "}
            </span>
            <br />
            <span className="events">
              <b>5 بهمن </b>
              جشن نوسره{" "}
            </span>
            <br />
            <span className="events">
              <b>5 بهمن </b>
              شهادت امام علی النقی الهادی علیه السلام [ ٣ رجب ]{" "}
            </span>
            <br />
            <span className="events">
              <b>10 بهمن </b>
              جشن سده{" "}
            </span>
            <br />
            <span className="events">
              <b>12 بهمن </b>
              بازگشت امام خمینی (ره) به ایران{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>15 بهمن </b>
              ولادت امام علی علیه السلام و روز پدر [ ١٣ رجب ]{" "}
            </span>
            <br />
            <span className="events">
              <b>15 بهمن </b>
              جشن میانه زمستان{" "}
            </span>
            <br />
            <span className="events">
              <b>17 بهمن </b>
              وفات حضرت زینب سلام الله علیها [ ١٥ رجب ]{" "}
            </span>
            <br />
            <span className="events">
              <b>19 بهمن </b>
              روز نیروی هوایی{" "}
            </span>
            <br />
            <span className="events">
              <b>22 بهمن </b>
              پیروزی انقلاب اسلامی{" "}
            </span>
            <br />
            <span className="events">
              <b>22 بهمن </b>
              حمله به سفارت روسیه و قتل گریبایدوف سفیر روسیه تزاری در ایران [ 11
              February ]{" "}
            </span>
            <br />
            <span className="events">
              <b>23 بهمن </b>
              زادروز چارلز داروین بنیانگذار نظریه‌ی فرگشت از طریق انتخاب طبیعی [
              12 February ]{" "}
            </span>
            <br />
            <span className="events">
              <b>25 بهمن </b>
              جشن ولنتاین [ 14 February ]{" "}
            </span>
            <br />
            <span className="events">
              <b>27 بهمن </b>
              شهادت امام موسی کاظم علیه السلام [ ٢٥ رجب ]{" "}
            </span>
            <br />
            <span className="events">
              <b>29 بهمن </b>
              جشن سپندارمذگان و روز عشق{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>29 بهمن </b>
              مبعث رسول اکرم (ص) [ ٢٧ رجب ]{" "}
            </span>
            <br />
            <span className="events">
              <b>29 بهمن </b>
              فاجعه انفجار قطار نیشابور [1382 خورشیدی]{" "}
            </span>
            <br />
          </>
        );
      } else if (selectedDay.month === 12) {
        return (
          <>
            <h1 className="events-title">مناسبت های ماه اسفند</h1>
            <hr />
            <span className="events">
              <b>5 اسفند </b>
              روز بزرگداشت زمین و بانوان{" "}
            </span>
            <br />
            <span className="events">
              <b>5 اسفند </b>
              روز بزرگداشت خواجه نصیر الدین طوسی و روز مهندس{" "}
            </span>
            <br />
            <span className="events">
              <b>5 اسفند </b>
              ولادت سالار شهیدان، امام حسین علیه السلام و روز پاسدار [ ٣ شعبان ]{" "}
            </span>
            <br />
            <span className="events">
              <b>6 اسفند </b>
              ولادت ابوالفضل العباس علیه السلام و روز جانباز [ ٤ شعبان ]{" "}
            </span>
            <br />
            <span className="events">
              <b>7 اسفند </b>
              ولادت امام زین العابدین علیه السلام [ ٥ شعبان ]{" "}
            </span>
            <br />
            <span className="events">
              <b>7 اسفند </b>
              سالروز استقلال کانون وکلای دادگستری و روز وکیل مدافع{" "}
            </span>
            <br />
            <span className="events">
              <b>7 اسفند </b>
              سالروز درگذشت علی اکبر دهخدا{" "}
            </span>
            <br />
            <span className="events">
              <b>13 اسفند </b>
              ولادت علی اکبر علیه السلام و روز جوان [ ١١ شعبان ]{" "}
            </span>
            <br />
            <span className="events">
              <b>15 اسفند </b>
              روز درختکاری{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>17 اسفند </b>
              ولادت حضرت قائم عجل الله تعالی فرجه و جشن نیمه شعبان [ ١٥ شعبان ]{" "}
            </span>
            <br />
            <span className="events">
              <b>17 اسفند </b>
              روزجهانی زنان [ 8 March ]{" "}
            </span>
            <br />
            <span className="events">
              <b>23 اسفند </b>
              روز جهانی عدد پی π [ 14 March ]{" "}
            </span>
            <br />
            <span className="events">
              <b>25 اسفند </b>
              پایان سرایش شاهنامه{" "}
            </span>
            <br />
            <span className="events holiday">
              <b>29 اسفند </b>
              روز ملی شدن صنعت نفت ایران{" "}
            </span>
            <br />
            <span className="events">
              <b>29 اسفند </b>
              روز جهانی شادی [ 20 March ]{" "}
            </span>
            <br />
          </>
        );
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="container align-items-center justify-content-center p-5">
        <div className="row justify-content-center">
          <div className="calendar col-lg-5 p-3 m-3 col-md-12">
            <Calendar
              value={selectedDay}
              onChange={setSelectedDay}
              shouldHighlightWeekends
              locale="fa"
              calendarClassName="responsive-calendar"
              customDaysClassName={[
                { year: 1401, month: 1, day: 1, className: "holiday" },
                { year: 1401, month: 1, day: 2, className: "holiday" },
                { year: 1401, month: 1, day: 3, className: "holiday" },
                { year: 1401, month: 1, day: 4, className: "holiday" },
                { year: 1401, month: 1, day: 13, className: "holiday" },
                { year: 1401, month: 2, day: 3, className: "holiday" },
                { year: 1401, month: 2, day: 13, className: "holiday" },
                { year: 1401, month: 2, day: 14, className: "holiday" },
                { year: 1401, month: 3, day: 14, className: "holiday" },
                { year: 1401, month: 3, day: 15, className: "holiday" },
                { year: 1401, month: 4, day: 19, className: "holiday" },
                { year: 1401, month: 4, day: 27, className: "holiday" },
                { year: 1401, month: 5, day: 16, className: "holiday" },
                { year: 1401, month: 5, day: 17, className: "holiday" },
                { year: 1401, month: 6, day: 26, className: "holiday" },
                { year: 1401, month: 7, day: 3, className: "holiday" },
                { year: 1401, month: 7, day: 5, className: "holiday" },
                { year: 1401, month: 7, day: 13, className: "holiday" },
                { year: 1401, month: 10, day: 6, className: "holiday" },
                { year: 1401, month: 11, day: 15, className: "holiday" },
                { year: 1401, month: 11, day: 22, className: "holiday" },
                { year: 1401, month: 11, day: 29, className: "holiday" },
                { year: 1401, month: 12, day: 17, className: "holiday" },
                { year: 1401, month: 12, day: 29, className: "holiday" },
              ]}
            />
          </div>
          <div className="holiday-texts col-lg-6 m-3 p-3 col-md-12 ">
            {showHolidays()}
          </div>
        </div>
      </div>
    </>
  );
};

export default SolarCalendar;
