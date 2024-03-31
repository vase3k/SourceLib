import './lib/lib';

$('.wrap').html(
    `<div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">
            dropdown button
        </button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <div href="#" class="dropdown-item">action #1</div>
            <div href="#" class="dropdown-item">action #2</div>
            <div href="#" class="dropdown-item">action #3</div>
        </div>
    </div>`
);

$('.dropdown-toggle').dropdown();