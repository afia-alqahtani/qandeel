function initMoneyBox() {
    const currentElement = document.getElementById('current-amount');
    if (currentElement) {
        const current = parseFloat(currentElement.innerText);
        const target = 6000; // الهدف المالي المراد الوصول إليه للحفل الختامي
        const percentage = (current / target) * 100;

        // عشان يعبي شريط التقدم بسلاسة بعد نصف ثانية من فتح الموقع
        setTimeout(() => {
            const fillElement = document.getElementById('progress-fill');
            if (fillElement) {
                fillElement.style.width = percentage + '%';
            }
        }, 500);
    }
}

// عشان يسوي أنيميشن تصاعد الأرقام الحركي لـ (قنديل في أرقام)
function runCounters() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        counter.innerText = '0';
        const target = +counter.getAttribute('data-target');
        const speed = 100; // التحكم في سرعة تصاعد الأرقام

        const updateCounter = () => {
            const current = +counter.innerText;
            const increment = Math.ceil(target / speed);

            if(current < target) {
                counter.innerText = current + increment;
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

// تشغيل العدادات والحصالة تلقائياً بمجرد اكتمال تحميل عناصر الصفحة
window.addEventListener('DOMContentLoaded', () => {
    initMoneyBox();
    runCounters();
});