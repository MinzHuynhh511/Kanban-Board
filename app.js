// ===== KANBAN BOARD APP =====

// --- Data ---
let tasks = [];
let draggedTaskId = null;
let deleteTargetId = null;
let editMode = false;

// --- DOM References ---
const todoList = document.getElementById('todo-list');
const doingList = document.getElementById('doing-list');
const doneList = document.getElementById('done-list');
const taskModal = document.getElementById('taskModal');
const deleteModal = document.getElementById('deleteModal');
const taskForm = document.getElementById('taskForm');
const modalTitle = document.getElementById('modalTitle');
const toastContainer = document.getElementById('toastContainer');

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    renderAllTasks();
    setupEventListeners();
});

// --- Event Listeners ---
function setupEventListeners() {
    // Open add modal
    document.getElementById('btnOpenModal').addEventListener('click', () => openModal());

    // Close modals
    document.getElementById('btnCloseModal').addEventListener('click', closeModal);
    document.getElementById('btnCancel').addEventListener('click', closeModal);
    document.getElementById('btnCloseDelete').addEventListener('click', closeDeleteModal);
    document.getElementById('btnCancelDelete').addEventListener('click', closeDeleteModal);

    // Confirm delete
    document.getElementById('btnConfirmDelete').addEventListener('click', confirmDelete);

    // Submit form
    taskForm.addEventListener('submit', handleFormSubmit);

    // Color picker
    document.querySelectorAll('.color-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
        });
    });

    // Close modal on overlay click
    taskModal.addEventListener('click', (e) => {
        if (e.target === taskModal) closeModal();
    });
    deleteModal.addEventListener('click', (e) => {
        if (e.target === deleteModal) closeDeleteModal();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeDeleteModal();
        }
        if (e.key === 'n' && e.ctrlKey) {
            e.preventDefault();
            openModal();
        }
    });
}

// --- LocalStorage ---
function saveTasks() {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const saved = localStorage.getItem('kanban-tasks');
    if (saved) {
        tasks = JSON.parse(saved);
    } else {
        // Demo data
        tasks = [
            {
                id: generateId(),
                title: 'Thiết kế giao diện',
                description: 'Thiết kế mockup cho trang chủ',
                priority: 'high',
                color: '#F8BBD0',
                status: 'todo',
                dueDate: '2026-10-25',
                createdAt: new Date().toISOString()
            },
            {
                id: generateId(),
                title: 'Viết API backend',
                description: 'Tạo REST API cho module người dùng',
                priority: 'medium',
                color: '#BBDEFB',
                status: 'todo',
                dueDate: '2026-10-28',
                createdAt: new Date().toISOString()
            },
            {
                id: generateId(),
                title: 'Cài đặt database',
                description: 'Setup PostgreSQL và tạo schema',
                priority: 'high',
                color: '#FFF9C4',
                status: 'doing',
                dueDate: '2026-10-20',
                createdAt: new Date().toISOString()
            },
            {
                id: generateId(),
                title: 'Lên kế hoạch dự án',
                description: 'Phân tích yêu cầu và lập timeline',
                priority: 'low',
                color: '#C8E6C9',
                status: 'done',
                dueDate: '2026-10-18',
                createdAt: new Date().toISOString()
            }
        ];
        saveTasks();
    }
}

// --- Generate ID ---
function generateId() {
    return 'task-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

// --- Render Tasks ---
function renderAllTasks() {
    renderColumn('todo', todoList);
    renderColumn('doing', doingList);
    renderColumn('done', doneList);
    updateCounts();
}

function renderColumn(status, listEl) {
    // Keep empty state
    const emptyState = listEl.querySelector('.empty-state');
    listEl.innerHTML = '';
    if (emptyState) listEl.appendChild(emptyState);

    const columnTasks = tasks.filter(t => t.status === status);
    columnTasks.forEach(task => {
        const noteEl = createStickyNote(task);
        listEl.appendChild(noteEl);
    });
}

function createStickyNote(task) {
    const note = document.createElement('div');
    note.className = 'sticky-note';
    note.id = task.id;
    note.draggable = true;
    note.style.backgroundColor = task.color;

    // Random slight rotation for realistic sticky note effect
    const rotation = (Math.random() - 0.5) * 3;
    note.style.setProperty('--rotation', `${rotation}deg`);

    // Priority label
    const priorityLabels = {
        low: { text: '🟢 Thấp', class: 'priority-low' },
        medium: { text: '🟡 TB', class: 'priority-medium' },
        high: { text: '🔴 Cao', class: 'priority-high' }
    };
    const priority = priorityLabels[task.priority] || priorityLabels.medium;

    // Due date formatting
    let dueDateHtml = '';
    if (task.dueDate) {
        const dueDate = new Date(task.dueDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const isOverdue = dueDate < today && task.status !== 'done';
        const formattedDate = dueDate.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
        dueDateHtml = `<span class="note-due ${isOverdue ? 'overdue' : ''}">📅 ${formattedDate}${isOverdue ? ' ⚠️' : ''}</span>`;
    }

    note.innerHTML = `
        <div class="note-actions">
            <button class="btn-edit-note" onclick="editTask('${task.id}')" title="Sửa">✏️</button>
            <button class="btn-delete-note" onclick="deleteTask('${task.id}')" title="Xóa">🗑️</button>
        </div>
        <div class="note-title">${escapeHtml(task.title)}</div>
        ${task.description ? `<div class="note-desc">${escapeHtml(task.description)}</div>` : ''}
        <div class="note-meta">
            <span class="note-priority ${priority.class}">${priority.text}</span>
            ${dueDateHtml}
        </div>
    `;

    // Drag events
    note.addEventListener('dragstart', handleDragStart);
    note.addEventListener('dragend', handleDragEnd);

    // Touch events for mobile
    note.addEventListener('touchstart', handleTouchStart, { passive: false });
    note.addEventListener('touchmove', handleTouchMove, { passive: false });
    note.addEventListener('touchend', handleTouchEnd);

    return note;
}

// --- Escape HTML ---
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// --- Update Counts ---
function updateCounts() {
    const todoCount = tasks.filter(t => t.status === 'todo').length;
    const doingCount = tasks.filter(t => t.status === 'doing').length;
    const doneCount = tasks.filter(t => t.status === 'done').length;

    document.getElementById('count-todo').textContent = todoCount;
    document.getElementById('count-doing').textContent = doingCount;
    document.getElementById('count-done').textContent = doneCount;

    document.getElementById('stat-todo').innerHTML = `📝 To Do: <strong>${todoCount}</strong>`;
    document.getElementById('stat-doing').innerHTML = `🔧 Doing: <strong>${doingCount}</strong>`;
    document.getElementById('stat-done').innerHTML = `✅ Done: <strong>${doneCount}</strong>`;
}

// ===== DRAG & DROP =====
function handleDragStart(e) {
    draggedTaskId = e.target.closest('.sticky-note').id;
    e.target.closest('.sticky-note').classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', draggedTaskId);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    document.querySelectorAll('.task-list').forEach(list => {
        list.classList.remove('drag-over');
    });
    document.querySelectorAll('.drop-indicator').forEach(el => el.remove());
    draggedTaskId = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const list = e.currentTarget;
    list.classList.add('drag-over');

    // Find the closest note to insert before
    const afterElement = getDragAfterElement(list, e.clientY);

    // Remove existing indicators
    document.querySelectorAll('.drop-indicator').forEach(el => el.remove());

    // Add drop indicator
    const indicator = document.createElement('div');
    indicator.className = 'drop-indicator';

    if (afterElement) {
        list.insertBefore(indicator, afterElement);
    } else {
        list.appendChild(indicator);
    }
}

function handleDragLeave(e) {
    // Only remove if actually leaving the list
    const list = e.currentTarget;
    const rect = list.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || 
        e.clientY < rect.top || e.clientY > rect.bottom) {
        list.classList.remove('drag-over');
        list.querySelectorAll('.drop-indicator').forEach(el => el.remove());
    }
}

function handleDrop(e) {
    e.preventDefault();
    const list = e.currentTarget;
    list.classList.remove('drag-over');
    document.querySelectorAll('.drop-indicator').forEach(el => el.remove());

    if (!draggedTaskId) return;

    const column = list.closest('.column');
    const newStatus = column.dataset.status;
    const task = tasks.find(t => t.id === draggedTaskId);

    if (task) {
        const oldStatus = task.status;
        task.status = newStatus;

        // Reorder within the tasks array based on drop position
        const afterElement = getDragAfterElement(list, e.clientY);
        const columnTasks = tasks.filter(t => t.status === newStatus && t.id !== task.id);

        if (afterElement) {
            const afterTask = tasks.find(t => t.id === afterElement.id);
            const afterIndex = columnTasks.indexOf(afterTask);
            columnTasks.splice(afterIndex, 0, task);
        } else {
            columnTasks.push(task);
        }

        // Rebuild tasks array maintaining order
        const otherTasks = tasks.filter(t => t.status !== newStatus && t.id !== task.id);
        tasks = [...otherTasks, ...columnTasks];

        saveTasks();
        renderAllTasks();

        if (oldStatus !== newStatus) {
            const statusNames = { todo: 'To Do', doing: 'Doing', done: 'Done' };
            showToast(`Di chuyển "${task.title}" sang ${statusNames[newStatus]}`, 'info');
        }
    }
}

function getDragAfterElement(list, y) {
    const notes = [...list.querySelectorAll('.sticky-note:not(.dragging)')];

    return notes.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// ===== TOUCH SUPPORT (Mobile) =====
let touchData = { startX: 0, startY: 0, element: null, clone: null };

function handleTouchStart(e) {
    const note = e.target.closest('.sticky-note');
    if (!note || e.target.closest('.note-actions')) return;

    touchData.element = note;
    touchData.startX = e.touches[0].clientX;
    touchData.startY = e.touches[0].clientY;

    // Long press to start drag
    touchData.timeout = setTimeout(() => {
        draggedTaskId = note.id;
        note.classList.add('dragging');

        // Create clone for visual feedback
        touchData.clone = note.cloneNode(true);
        touchData.clone.style.position = 'fixed';
        touchData.clone.style.zIndex = '9999';
        touchData.clone.style.pointerEvents = 'none';
        touchData.clone.style.width = note.offsetWidth + 'px';
        touchData.clone.style.opacity = '0.85';
        touchData.clone.style.transform = 'rotate(3deg) scale(1.05)';
        document.body.appendChild(touchData.clone);

        // Haptic feedback if available
        if (navigator.vibrate) navigator.vibrate(50);
    }, 300);
}

function handleTouchMove(e) {
    if (!draggedTaskId) {
        // Cancel long press if moved too much
        const dx = e.touches[0].clientX - touchData.startX;
        const dy = e.touches[0].clientY - touchData.startY;
        if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
            clearTimeout(touchData.timeout);
        }
        return;
    }

    e.preventDefault();
    const touch = e.touches[0];

    if (touchData.clone) {
        touchData.clone.style.left = (touch.clientX - touchData.clone.offsetWidth / 2) + 'px';
        touchData.clone.style.top = (touch.clientY - touchData.clone.offsetHeight / 2) + 'px';
    }

    // Highlight column under touch
    document.querySelectorAll('.task-list').forEach(list => {
        const rect = list.getBoundingClientRect();
        if (touch.clientX >= rect.left && touch.clientX <= rect.right &&
            touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
            list.classList.add('drag-over');
        } else {
            list.classList.remove('drag-over');
        }
    });
}

function handleTouchEnd(e) {
    clearTimeout(touchData.timeout);

    if (!draggedTaskId) return;

    const touch = e.changedTouches[0];

    // Find drop target
    document.querySelectorAll('.task-list').forEach(list => {
        const rect = list.getBoundingClientRect();
        if (touch.clientX >= rect.left && touch.clientX <= rect.right &&
            touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
            const column = list.closest('.column');
            const newStatus = column.dataset.status;
            const task = tasks.find(t => t.id === draggedTaskId);

            if (task) {
                const oldStatus = task.status;
                task.status = newStatus;
                saveTasks();
                renderAllTasks();

                if (oldStatus !== newStatus) {
                    const statusNames = { todo: 'To Do', doing: 'Doing', done: 'Done' };
                    showToast(`Di chuyển "${task.title}" sang ${statusNames[newStatus]}`, 'info');
                }
            }
        }
        list.classList.remove('drag-over');
    });

    // Cleanup
    if (touchData.clone) {
        touchData.clone.remove();
        touchData.clone = null;
    }
    if (touchData.element) {
        touchData.element.classList.remove('dragging');
    }
    draggedTaskId = null;
}

// ===== MODAL MANAGEMENT =====
function openModal(taskId = null) {
    editMode = !!taskId;
    taskForm.reset();
    document.getElementById('taskId').value = '';

    // Reset color picker
    document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
    document.querySelector('.color-option[data-color="#FFF9C4"]').classList.add('selected');

    if (editMode) {
        const task = tasks.find(t => t.id === taskId);
        if (!task) return;

        modalTitle.textContent = '✏️ Chỉnh sửa công việc';
        document.getElementById('taskId').value = task.id;
        document.getElementById('taskTitle').value = task.title;
        document.getElementById('taskDesc').value = task.description || '';
        document.getElementById('taskPriority').value = task.priority;
        document.getElementById('taskStatus').value = task.status;
        document.getElementById('taskDueDate').value = task.dueDate || '';

        // Select color
        document.querySelectorAll('.color-option').forEach(o => {
            o.classList.toggle('selected', o.dataset.color === task.color);
        });
    } else {
        modalTitle.textContent = '✏️ Thêm công việc mới';
    }

    taskModal.classList.add('active');
    setTimeout(() => document.getElementById('taskTitle').focus(), 100);
}

function closeModal() {
    taskModal.classList.remove('active');
    taskForm.reset();
    editMode = false;
}

function closeDeleteModal() {
    deleteModal.classList.remove('active');
    deleteTargetId = null;
}

// ===== FORM SUBMIT =====
function handleFormSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('taskTitle').value.trim();
    if (!title) {
        showToast('Vui lòng nhập tiêu đề công việc!', 'warning');
        return;
    }

    const selectedColor = document.querySelector('.color-option.selected');
    const color = selectedColor ? selectedColor.dataset.color : '#FFF9C4';

    const taskData = {
        title: title,
        description: document.getElementById('taskDesc').value.trim(),
        priority: document.getElementById('taskPriority').value,
        color: color,
        status: document.getElementById('taskStatus').value,
        dueDate: document.getElementById('taskDueDate').value || null
    };

    const taskId = document.getElementById('taskId').value;

    if (editMode && taskId) {
        // Update existing task
        const index = tasks.findIndex(t => t.id === taskId);
        if (index !== -1) {
            tasks[index] = { ...tasks[index], ...taskData };
            showToast(`Đã cập nhật "${title}"`, 'success');
        }
    } else {
        // Create new task
        const newTask = {
            id: generateId(),
            ...taskData,
            createdAt: new Date().toISOString()
        };
        tasks.push(newTask);
        showToast(`Đã thêm "${title}" vào ${getStatusName(taskData.status)}`, 'success');
    }

    saveTasks();
    renderAllTasks();
    closeModal();
}

// ===== EDIT & DELETE =====
function editTask(taskId) {
    openModal(taskId);
}

function deleteTask(taskId) {
    deleteTargetId = taskId;
    deleteModal.classList.add('active');
}

function confirmDelete() {
    if (!deleteTargetId) return;

    const task = tasks.find(t => t.id === deleteTargetId);
    const title = task ? task.title : '';

    tasks = tasks.filter(t => t.id !== deleteTargetId);
    saveTasks();
    renderAllTasks();
    closeDeleteModal();

    showToast(`Đã xóa "${title}"`, 'error');
}

// ===== UTILITIES =====
function getStatusName(status) {
    const names = { todo: 'To Do', doing: 'Doing', done: 'Done' };
    return names[status] || status;
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
        success: '✅',
        info: 'ℹ️',
        warning: '⚠️',
        error: '🗑️'
    };

    toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span> ${message}`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

