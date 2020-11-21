import React from 'react'

const TestDrive = () => {

    return (
        <div class="block block--color test-drive-container">
            <div class="block__container">
                <div class="block__title">Закажите тест-драйв</div>
                <div class="block__text">Выберите автомобиль, который будет похож на&nbsp;члена вашей семьи и&nbsp;который наилучшим образом соответствует вашим потребностям.</div>
                <form class="form" id="testDriveForm" method="post" novalidate="" data-netlify="true">
                    <div class="reg">
                        <div class="reg-form">
                            <div class="reg-form__block reg-form__block--left">
                                <div class="form-row">
                                    <div class="form-input form-input--select">
                                        <select name="model_id" data-placeholder="Выберите модель ŠKODA *" data-select2-id="1" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                            <option></option>
                                            {/* <option value="9">Новый RAPID</option> */}
                                            {/* <option value="2">RAPID</option> */}
                                            {/* <option value="1">OCTAVIA</option> */}
                                            <option value="5" selected="selected" data-select2-id="3">KODIAQ</option>
                                            {/* <option value="4">SUPERB</option> */}
                                            {/* <option value="8">KAROQ</option> */}
                                            {/* <option value="10">Новая OCTAVIA</option> */}
                                        </select>
                                        <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style={{ width: "101px" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-model_id-1g-container">
                                            {/* <span class="select2-selection__rendered" id="select2-model_id-1g-container" role="textbox" aria-readonly="true" title="KODIAQ">KODIAQ</span> */}
                                            <span class="select2-selection__arrow" role="presentation"><b role="presentation"></b>
                                            </span>
                                        </span>
                                        </span>
                                            <span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                        <div class="form-input__error">Модель не выбрана</div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-input form-input--select">
                                        <select name="city" data-placeholder="Выберите город *" data-select2-id="4" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                            <option ></option>
                                            <option selected="selected" data-select2-id="1" value="tashkent">Ташкент</option>
                                            {/* <option value="samarqand">Самарканд</option> */}
                                            {/* <option value="buxoro">Бухара</option> */}
                                            {/* <option value="jizzax">Джиззак</option> */}
                                            {/* <option value="termiz">Термез</option> */}
                                            {/* <option value="qarshi">Карши</option> */}
                                            {/* <option value="andijon">Андижан</option> */}
                                            {/* <option value="namangan">Наманган</option> */}
                                            {/* <option value="fargona">Фергана</option> */}
                                            {/* <option value="navoiy">Наваи</option> */}
                                            {/* <option value="xiva">Хива</option> */}
                                            {/* <option value="nukus">Нукус</option>                                             */}
                                        </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="5" style={{ width: "127px" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-city-sh-container">
                                            {/* <span class="select2-selection__rendered" id="select2-city-sh-container" role="textbox" aria-readonly="true">
                                                <span class="select2-selection__placeholder">Выберите город *</span>
                                                </span> */}
                                            <span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                        <div class="form-input__error">Город не выбран</div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-input form-input--select">
                                        <select name="dealer" data-placeholder="Выберите дилера *" disabled="" data-select2-id="7" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                            {/* <option data-select2-id="9"></option> */}
                                            <option value="1" selected="selected" data-select3-id="1">Driver's Village</option>
                                        </select><span class="select2 select2-container select2-container--default select2-container--disabled" dir="ltr" data-select2-id="8" style={{ width: "2px" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-labelledby="select2-dealer-4o-container">
                                            {/* <span class="select2-selection__rendered" id="select2-dealer-4o-container" role="textbox" aria-readonly="true">
                                                <span class="select2-selection__placeholder">Выберите дилера *</span>
                                            </span> */}
                                            <span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                        <div class="form-input__error">Дилер не выбран</div>
                                        <a class="form-input__link" data-fancybox="" data-src="#map_popup" data-touch="false" data-small-btn="false" href="javascript:;">На карте</a>
                                    </div>
                                </div>
                            </div>
                            <div class="reg-form__block reg-form__block--right">
                                <div class="form-row">
                                    <div class="form-input">
                                        <input type="text" name="name" class="form-input__input" required="" data-pattern="^[-'a-zA-ZА-я\s]+$" />
                                        <div class="form-input__placeholder">Имя *</div>
                                        <div class="form-input__error">Имя указано неверно</div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-input">
                                        <input type="text" name="last_name" class="form-input__input" required="" data-pattern="^[-'a-zA-ZА-я\s]+$" />
                                        <div class="form-input__placeholder">Фамилия *</div>
                                        <div class="form-input__error">Фамилия указана неверно</div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-input">
                                        <input type="tel" name="phone" class="form-input__input" required="" data-pattern="^((\+8|\+7|8)[\- ]?)(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$" />
                                        <div class="form-input__placeholder">Телефон *</div>
                                        <div class="form-input__error">Некорректный номер телефона</div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-input">
                                        <input type="email" name="email" class="form-input__input" required="" data-pattern=".+@.+\..+" />
                                        <div class="form-input__placeholder">E-mail *</div>
                                        <div class="form-input__error">Некорректный email</div>
                                    </div>
                                </div>
                            </div>
                            <div class="reg-form__block reg-form__block--options">
                                <label class="checkbox checkbox--toggle">
                                    <input type="checkbox" name="childs_seat" value="1" />
                                    <div class="checkbox__text">
                                        <div class="checkbox__text-main">Семейный тест-драйв</div>
                                        <div class="checkbox__text-secondary">Добавить детское кресло</div>
                                    </div>
                                    <div class="checkbox__input"></div>
                                </label>

                                <label class="checkbox">
                                    <input name="personal_agree" type="checkbox" required="" />
                                    <div class="checkbox__input"></div>
                                    <div class="checkbox__text">Я согласен на <a href="http://www.skoda-avto.ru/about/pages/rules2.aspx" target="_blank">обработку запроса</a> *</div>
                                </label>
                                <label class="checkbox">
                                    <input name="adv_agree" type="checkbox" />
                                    <div class="checkbox__input"></div>
                                    <div class="checkbox__text">Я согласен на <a href="http://www.skoda-avto.ru/about/pages/rules3.aspx" target="_blank">рекламную коммуникацию</a></div>
                                </label>                        <div class="checkbox">
                                    <div class="checkbox__dummy">*</div>
                                    <div class="checkbox__text">Поля, обязательные для заполнения</div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="button">Отправить</button>
                    </div>
                </form>
                <div class="form-success">
                    Спасибо, Ваша заявка успешно отправлена.                    </div>
            </div>
        </div>
    )

}

export default TestDrive;