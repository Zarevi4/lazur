const date = new Date();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const ex = tomorrow.toLocaleDateString();
const endInput = document.getElementsByClassName('end')[0].placeholder = ex;

const start = datepicker('.start', { 
    id: 1, 
    startDay: 1,
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    customDays: ['Вос', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    overlayButton: "Выбрать",
    overlayPlaceholder: '4-значный год',
    minDate: date,
    disableYearOverlay: true,
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value // => '1/1/2099'
      },
    onSelect: instance => {
    // Show which date was selected.
    console.log(instance.dateSelected)
    },
});
const end = datepicker('.end', { 
    id: 1, 
    startDay: 1,
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    overlayButton: "Выбрать",
    overlayPlaceholder: '4-значный год',
    minDate: date,
    disableYearOverlay: true,
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value // => '1/1/2099'
      }
});
start.setDate(new Date());
