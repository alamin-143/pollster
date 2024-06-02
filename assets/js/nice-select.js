// nice-select.js
class NiceSelect {
    constructor(selectElement) {
        this.selectElement = selectElement;
        this.createNiceSelect();
        this.setupEventListeners();
    }

    createNiceSelect() {
        this.niceSelectContainer = document.createElement('div');
        this.niceSelectContainer.classList.add('nice-select');

        this.selectedOption = document.createElement('span');
        this.selectedOption.classList.add('current');

        this.niceSelectContainer.appendChild(this.selectedOption);

        // Create dropdown options
        this.optionsContainer = document.createElement('ul');
        this.optionsContainer.classList.add('list');

        Array.from(this.selectElement.options).forEach(option => {
            const li = document.createElement('li');
            li.textContent = option.textContent;
            li.dataset.value = option.value;
            this.optionsContainer.appendChild(li);
        });

        this.niceSelectContainer.appendChild(this.optionsContainer);

        // Hide original select
        this.selectElement.style.display = 'none';

        // Insert nice select after original select
        this.selectElement.parentNode.insertBefore(this.niceSelectContainer, this.selectElement.nextSibling);
    }

    setupEventListeners() {
        this.selectedOption.addEventListener('click', () => {
            this.optionsContainer.classList.toggle('open');
        });

        this.optionsContainer.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                this.selectedOption.textContent = event.target.textContent;
                this.selectElement.value = event.target.dataset.value;
                this.optionsContainer.classList.remove('open');
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!this.niceSelectContainer.contains(event.target)) {
                this.optionsContainer.classList.remove('open');
            }
        });
    }
}
