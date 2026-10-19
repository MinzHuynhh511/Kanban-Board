// ==========================================================================
// 看板 KANBAN & SCRUM AGILE ENGINE
// Multi-language (Tiếng Việt & English) — Zero Font Error
// Japanese Zen Aesthetic & Continuous Improvement (改善 - Kaizen)
// ==========================================================================

// ===== MULTI-LANGUAGE DICTIONARY (i18n) =====
let currentLang = localStorage.getItem('kanban_zen_lang') || 'vi';

const TRANSLATIONS = {
    vi: {
        appSubtitle: 'アジャイル · Agile & Scrum',
        sprintDaysRemaining: '{days} ngày còn lại',
        sprintDueToday: 'Hôm nay là hạn cuối',
        sprintOverdue: 'Đã quá hạn {days} ngày',
        statTodoLabel: '待',
        statDoingLabel: '進',
        statDoneLabel: '完',
        btnAddTask: 'Thêm việc',
        colTodoTitle: '待機 · Cần làm',
        colDoingTitle: '進行 · Đang làm',
        colDoneTitle: '完了 · Hoàn thành',
        emptyTodo: 'Kéo thả sticky note vào đây',
        emptyDoing: 'Đang thực hiện',
        emptyDone: 'Đã hoàn thành',
        sprintCurrentTitle: 'スプリント · Sprint hiện tại',
        labelCompleted: 'hoàn thành',
        labelGoal: 'Mục tiêu',
        noGoal: 'Chưa đặt mục tiêu',
        burndownTitle: 'バーンダウン · Burndown',
        burndownIdeal: 'Lý tưởng',
        burndownActual: 'Thực tế',
        standupTitle: '朝会 · Daily Standup',
        emptyStandup: 'Nhấn ＋ để ghi chú standup hàng ngày',
        tipsSectionTitle: 'Bạn có biết? · Mẹo Scrumban',
        backlogTitle: 'バックログ · Product Backlog',
        backlogDesc: 'Danh sách User Stories chưa vào Sprint. Bấm "Đưa vào Sprint" để bắt đầu thực hiện.',
        emptyBacklog: 'Backlog trống. Nhấn ＋ để thêm.',
        historyTitle: '歴史 · Sprint History',
        emptyHistory: 'Chưa có Sprint nào hoàn thành',
        retroTitle: '振り返り · Retrospective',
        retroDesc: 'Nhìn lại Sprint — điều gì tốt, điều gì cần cải thiện?',
        retroGoodHeader: '🌸 Tốt — うまくいったこと',
        retroImproveHeader: '🍂 Cải thiện — 改善すべきこと',
        retroActionHeader: '🎋 Hành động — アクション',
        retroEmpty: 'Chưa có mục nào',
        btnMoveToSprint: '➡️ Đưa vào Sprint',
        modalAddTaskTitle: '✏️ Thêm công việc mới',
        modalEditTaskTitle: '✏️ Chỉnh sửa công việc',
        labelTaskTitle: 'Tiêu đề',
        labelTaskDesc: 'Mô tả',
        labelPriority: 'Độ ưu tiên',
        priorityLow: 'Thấp',
        priorityMedium: 'Trung bình',
        priorityHigh: 'Cao',
        labelStatus: 'Trạng thái',
        statusTodoOpt: '待機 · To Do',
        statusDoingOpt: '進行 · Doing',
        statusDoneOpt: '完了 · Done',
        labelDueDate: 'Hạn chót',
        labelStickyColor: 'Màu Sticky Note',
        btnCancel: 'Hủy',
        btnSave: 'Lưu',
        deleteTitle: 'Xác nhận xóa',
        deleteMsg: 'Bạn có chắc chắn muốn xóa công việc này?',
        btnDelete: 'Xóa',
        sprintConfigTitle: '⚙️ Cấu hình Sprint',
        labelSprintName: 'Tên Sprint',
        labelSprintGoal: 'Mục tiêu Sprint',
        labelStartDate: 'Ngày bắt đầu',
        labelEndDate: 'Ngày kết thúc',
        btnEndSprint: 'Kết thúc Sprint',
        btnSaveSprint: 'Lưu Sprint',
        addBacklogTitle: '📦 Thêm Backlog Item',
        labelUserStory: 'User Story',
        labelCriteria: 'Acceptance Criteria',
        toastMoved: 'Đã chuyển sang {status}',
        toastAdded: 'Đã thêm "{title}"',
        toastUpdated: 'Đã cập nhật "{title}"',
        toastDeleted: 'Đã xóa "{title}"',
        toastBacklogMoved: 'Đã đưa "{title}" vào Sprint!',
        toastStandupSaved: 'Đã lưu ghi chú Standup',
        toastRetroSaved: 'Đã lưu nhận xét Retrospective',
        toastSprintUpdated: 'Đã cập nhật cấu hình Sprint',
        toastSprintEnded: 'Chúc mừng! Đã kết thúc và khởi tạo {name}',
        standupPrompt: 'Ghi chú Daily Standup hôm nay:\n(Hôm qua đã làm gì? Hôm nay sẽ làm gì? Có khó khăn gì không?)',
        retroPromptGood: 'Điều gì đã diễn ra tốt trong Sprint này?',
        retroPromptImprove: 'Điều gì có thể cải thiện tốt hơn?',
        retroPromptAction: 'Hành động cụ thể cho Sprint tiếp theo?',
        confirmEndSprint: 'Bạn có chắc chắn muốn kết thúc {name}? Các công việc hoàn thành sẽ được lưu vào lịch sử.',
        today: 'Hôm nay'
    },
    en: {
        appSubtitle: 'アジャイル · Agile & Scrum',
        sprintDaysRemaining: '{days} days remaining',
        sprintDueToday: 'Sprint ends today',
        sprintOverdue: 'Overdue by {days} days',
        statTodoLabel: 'Wait',
        statDoingLabel: 'Prog',
        statDoneLabel: 'Done',
        btnAddTask: 'Add Task',
        colTodoTitle: '待機 · To Do',
        colDoingTitle: '進行 · In Progress',
        colDoneTitle: '完了 · Done',
        emptyTodo: 'Drag & drop sticky notes here',
        emptyDoing: 'Work in progress',
        emptyDone: 'Completed tasks',
        sprintCurrentTitle: 'スプリント · Current Sprint',
        labelCompleted: 'completed',
        labelGoal: 'Goal',
        noGoal: 'No sprint goal set',
        burndownTitle: 'バーンダウン · Burndown',
        burndownIdeal: 'Ideal',
        burndownActual: 'Actual',
        standupTitle: '朝会 · Daily Standup',
        emptyStandup: 'Click ＋ to record daily standup notes',
        tipsSectionTitle: 'Did you know? · Scrumban Tips',
        backlogTitle: 'バックログ · Product Backlog',
        backlogDesc: 'User Stories not yet in Sprint. Click "Move to Sprint" to start.',
        emptyBacklog: 'Backlog is empty. Click ＋ to add.',
        historyTitle: '歴史 · Sprint History',
        emptyHistory: 'No completed Sprints yet',
        retroTitle: '振り返り · Retrospective',
        retroDesc: 'Sprint review — what went well, what to improve?',
        retroGoodHeader: '🌸 Good — What went well',
        retroImproveHeader: '🍂 Improve — What to improve',
        retroActionHeader: '🎋 Action — Next steps',
        retroEmpty: 'No items yet',
        btnMoveToSprint: '➡️ Move to Sprint',
        modalAddTaskTitle: '✏️ Add New Task',
        modalEditTaskTitle: '✏️ Edit Task',
        labelTaskTitle: 'Title',
        labelTaskDesc: 'Description',
        labelPriority: 'Priority',
        priorityLow: 'Low',
        priorityMedium: 'Medium',
        priorityHigh: 'High',
        labelStatus: 'Status',
        statusTodoOpt: '待機 · To Do',
        statusDoingOpt: '進行 · Doing',
        statusDoneOpt: '完了 · Done',
        labelDueDate: 'Due Date',
        labelStickyColor: 'Sticky Note Color',
        btnCancel: 'Cancel',
        btnSave: 'Save',
        deleteTitle: 'Confirm Delete',
        deleteMsg: 'Are you sure you want to delete this task?',
        btnDelete: 'Delete',
        sprintConfigTitle: '⚙️ Sprint Configuration',
        labelSprintName: 'Sprint Name',
        labelSprintGoal: 'Sprint Goal',
        labelStartDate: 'Start Date',
        labelEndDate: 'End Date',
        btnEndSprint: 'End Sprint',
        btnSaveSprint: 'Save Sprint',
        addBacklogTitle: '📦 Add Backlog Item',
        labelUserStory: 'User Story',
        labelCriteria: 'Acceptance Criteria',
        toastMoved: 'Moved to {status}',
        toastAdded: 'Added "{title}"',
        toastUpdated: 'Updated "{title}"',
        toastDeleted: 'Deleted "{title}"',
        toastBacklogMoved: 'Moved "{title}" to Sprint!',
        toastStandupSaved: 'Saved Standup note',
        toastRetroSaved: 'Saved Retrospective note',
        toastSprintUpdated: 'Sprint configuration updated',
        toastSprintEnded: 'Congrats! Ended and created {name}',
        standupPrompt: 'Daily Standup notes:\n(What was done yesterday? What will be done today? Any blockers?)',
        retroPromptGood: 'What went well in this Sprint?',
        retroPromptImprove: 'What could be improved?',
        retroPromptAction: 'Concrete action items for the next Sprint?',
        confirmEndSprint: 'Are you sure you want to end {name}? Completed tasks will be archived.',
        today: 'Today'
    }
};

function t(key, params = {}) {
    let str = (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || TRANSLATIONS['vi'][key] || key;
    Object.keys(params).forEach(k => {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), params[k]);
    });
    return str;
}

function setLanguage(lang) {
    if (lang !== 'vi' && lang !== 'en') return;
    currentLang = lang;
    localStorage.setItem('kanban_zen_lang', lang);

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update static DOM elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        el.textContent = t(key);
    });

    // Re-render dynamic elements
    renderAll();
    showToast(lang === 'vi' ? 'Đã đổi sang Tiếng Việt' : 'Switched to English', 'info');
}

// ===== GLOBAL STATE =====
let tasks = [];
let backlog = [];
let standups = [];
let retros = { good: [], improve: [], action: [] };
let sprintHistory = [];

let currentSprint = {
    name: 'Sprint 1',
    goal: 'Xây dựng MVP hệ thống Quản lý Công việc & Scrum',
    startDate: getFormattedDate(0),
    endDate: getFormattedDate(14),
    status: 'active'
};

let draggedTaskId = null;
let deleteTargetId = null;
let editTaskId = null;
let editBacklogId = null;

// Japanese Traditional Color Palettes for Sticky Notes (Washi Paper)
const COLOR_PALETTE = {
    '#F5F0E1': '和紙 Washi',
    '#FADCE6': '桜 Sakura',
    '#D6E5C3': '抹茶 Matcha',
    '#C9D9E8': '藍 Ai',
    '#DDD2E4': '藤 Fuji',
    '#F0DCC0': '琥珀 Kohaku'
};

// Priority mappings
function getPriorityInfo(priority) {
    const isVi = currentLang === 'vi';
    switch (priority) {
        case 'high':
            return { text: isVi ? '高 · Cao' : 'High', class: 'priority-high' };
        case 'low':
            return { text: isVi ? '低 · Thấp' : 'Low', class: 'priority-low' };
        case 'medium':
        default:
            return { text: isVi ? '中 · TB' : 'Medium', class: 'priority-medium' };
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    loadAllData();
    // Initialize UI language
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
    renderAll();
    setupEventListeners();
    setupBurndownChart();
    startTipAutoPlay();
});

// Helper for dates
function getFormattedDate(offsetDays = 0) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split('T')[0];
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Add task button
    const btnOpen = document.getElementById('btnOpenModal');
    if (btnOpen) btnOpen.addEventListener('click', () => openTaskModal());

    // Task form
    const taskForm = document.getElementById('taskForm');
    if (taskForm) taskForm.addEventListener('submit', handleTaskFormSubmit);

    // Sprint form
    const sprintForm = document.getElementById('sprintForm');
    if (sprintForm) sprintForm.addEventListener('submit', handleSprintFormSubmit);

    // Backlog form
    const backlogForm = document.getElementById('backlogForm');
    if (backlogForm) backlogForm.addEventListener('submit', handleBacklogFormSubmit);

    // Delete confirm button
    const btnConfirmDelete = document.getElementById('btnConfirmDelete');
    if (btnConfirmDelete) btnConfirmDelete.addEventListener('click', confirmDelete);

    // Color picker
    document.querySelectorAll('#colorPicker .color-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('#colorPicker .color-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
        if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
            e.preventDefault();
            openTaskModal();
        }
    });

    // Window resize redrawing burndown
    window.addEventListener('resize', () => {
        renderBurndown();
    });
}

// ===== LOCAL STORAGE =====
function saveAllData() {
    localStorage.setItem('kanban_zen_tasks', JSON.stringify(tasks));
    localStorage.setItem('scrum_zen_sprint', JSON.stringify(currentSprint));
    localStorage.setItem('scrum_zen_backlog', JSON.stringify(backlog));
    localStorage.setItem('scrum_zen_standups', JSON.stringify(standups));
    localStorage.setItem('scrum_zen_retros', JSON.stringify(retros));
    localStorage.setItem('scrum_zen_history', JSON.stringify(sprintHistory));
}

function loadAllData() {
    const savedTasks = localStorage.getItem('kanban_zen_tasks');
    const savedSprint = localStorage.getItem('scrum_zen_sprint');
    const savedBacklog = localStorage.getItem('scrum_zen_backlog');
    const savedStandups = localStorage.getItem('scrum_zen_standups');
    const savedRetros = localStorage.getItem('scrum_zen_retros');
    const savedHistory = localStorage.getItem('scrum_zen_history');

    if (savedSprint) currentSprint = JSON.parse(savedSprint);
    if (savedBacklog) backlog = JSON.parse(savedBacklog);
    if (savedStandups) standups = JSON.parse(savedStandups);
    if (savedRetros) retros = JSON.parse(savedRetros);
    if (savedHistory) sprintHistory = JSON.parse(savedHistory);

    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    } else {
        // Japanese Zen / Agile Default Starter Data
        tasks = [
            {
                id: 'task-1',
                title: 'Thiết kế kiến trúc hệ thống',
                description: 'Phác thảo luồng dữ liệu Scrum & Kanban theo triết lý Kaizen',
                priority: 'high',
                points: 5,
                color: '#FADCE6', // Sakura
                status: 'done',
                dueDate: getFormattedDate(1),
                createdAt: new Date().toISOString()
            },
            {
                id: 'task-2',
                title: 'Tối ưu bảng màu Wabi-sabi',
                description: 'Giảm độ tương phản chói gắt, dùng màu tự nhiên (Washi, Matcha, Indigo)',
                priority: 'medium',
                points: 3,
                color: '#D6E5C3', // Matcha
                status: 'doing',
                dueDate: getFormattedDate(3),
                createdAt: new Date().toISOString()
            },
            {
                id: 'task-3',
                title: 'Biểu đồ Burndown theo thời gian thực',
                description: 'Hiển thị tốc độ hoàn thành Story Points mỗi ngày trong Sprint',
                priority: 'high',
                points: 5,
                color: '#C9D9E8', // Ai (Indigo)
                status: 'todo',
                dueDate: getFormattedDate(5),
                createdAt: new Date().toISOString()
            },
            {
                id: 'task-4',
                title: 'Quản lý Product Backlog & Story Points',
                description: 'Hỗ trợ đưa User Story từ Backlog sang Kanban To-Do',
                priority: 'medium',
                points: 3,
                color: '#F5F0E1', // Washi
                status: 'todo',
                dueDate: getFormattedDate(7),
                createdAt: new Date().toISOString()
            }
        ];

        backlog = [
            {
                id: 'bl-1',
                title: 'Là lập trình viên, tôi muốn nhận thông báo khi task quá hạn',
                description: 'Hệ thống gửi cảnh báo nhẹ nhàng để không gây phân tâm',
                priority: 'medium',
                points: 2
            },
            {
                id: 'bl-2',
                title: 'Là Scrum Master, tôi muốn xuất báo cáo Velocity qua các Sprint',
                description: 'Thống kê số story points hoàn thành trung bình để ước lượng chính xác',
                priority: 'low',
                points: 5
            }
        ];

        standups = [
            {
                id: 'su-1',
                date: 'Hôm nay',
                text: 'Hôm qua: Hoàn thành thiết kế hệ thống. Hôm nay: Tập trung vào Burndown Chart & Backlog.'
            }
        ];

        retros = {
            good: [
                'Giao diện phong cách Zen Nhật Bản dịu mắt, làm việc lâu không mỏi',
                'Story points phân bổ hợp lý theo dãy Fibonacci'
            ],
            improve: [
                'Cần kiểm soát Work In Progress (WIP) ở cột Doing chặt chẽ hơn'
            ],
            action: [
                'Giới hạn tối đa 3 task trong cột Doing để tăng độ tập trung'
            ]
        };

        sprintHistory = [
            { name: 'Sprint 0', goal: 'Khởi tạo dự án & setup nền tảng', points: 14, completed: 14, velocity: 14 }
        ];

        saveAllData();
    }
}

// ===== RENDER EVERYTHING =====
function renderAll() {
    renderKanbanColumns();
    renderScrumHeader();
    renderScrumSprintPanel();
    renderBacklog();
    renderStandup();
    renderRetro();
    renderBurndown();
    renderTip();
}

// ===== RENDER KANBAN COLUMNS =====
function renderKanbanColumns() {
    const todoList = document.getElementById('todo-list');
    const doingList = document.getElementById('doing-list');
    const doneList = document.getElementById('done-list');

    renderSingleColumn('todo', todoList);
    renderSingleColumn('doing', doingList);
    renderSingleColumn('done', doneList);

    // Counts
    const todoCount = tasks.filter(t => t.status === 'todo').length;
    const doingCount = tasks.filter(t => t.status === 'doing').length;
    const doneCount = tasks.filter(t => t.status === 'done').length;

    document.getElementById('count-todo').textContent = todoCount;
    document.getElementById('count-doing').textContent = doingCount;
    document.getElementById('count-done').textContent = doneCount;

    document.getElementById('statTodo').textContent = todoCount;
    document.getElementById('statDoing').textContent = doingCount;
    document.getElementById('statDone').textContent = doneCount;
}

function renderSingleColumn(status, container) {
    const emptyState = container.querySelector('.empty-state');
    container.innerHTML = '';
    if (emptyState) container.appendChild(emptyState);

    const colTasks = tasks.filter(t => t.status === status);
    colTasks.forEach(task => {
        const noteEl = createStickyNoteElement(task);
        container.appendChild(noteEl);
    });
}

function createStickyNoteElement(task) {
    const note = document.createElement('div');
    note.className = 'sticky-note';
    note.id = task.id;
    note.draggable = true;
    note.style.backgroundColor = task.color || '#F5F0E1';

    // Subtly varied rotation for organic paper feeling
    const seed = (task.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 5) - 2;
    note.style.setProperty('--rotation', `${seed * 0.8}deg`);

    const priorityInfo = getPriorityInfo(task.priority);

    // Due date
    let dueHtml = '';
    if (task.dueDate) {
        const due = new Date(task.dueDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const isOverdue = due < today && task.status !== 'done';
        const formatted = due.toLocaleDateString(currentLang === 'vi' ? 'vi-VN' : 'en-US', { day: '2-digit', month: '2-digit' });
        dueHtml = `<span class="note-due ${isOverdue ? 'overdue' : ''}">📅 ${formatted}${isOverdue ? ' ⚠️' : ''}</span>`;
    }

    note.innerHTML = `
        <div class="note-actions">
            <button onclick="editTask('${task.id}')" title="${currentLang === 'vi' ? 'Chỉnh sửa' : 'Edit'}">✏️</button>
            <button onclick="requestDeleteTask('${task.id}')" title="${currentLang === 'vi' ? 'Xóa' : 'Delete'}">✕</button>
        </div>
        <div class="note-title">${escapeHtml(task.title)}</div>
        ${task.description ? `<div class="note-desc">${escapeHtml(task.description)}</div>` : ''}
        <div class="note-meta">
            <div class="note-tags">
                <span class="note-sp">${task.points || 1} SP</span>
                <span class="note-priority ${priorityInfo.class}">${priorityInfo.text}</span>
            </div>
            ${dueHtml}
        </div>
    `;

    // Drag handlers
    note.addEventListener('dragstart', handleDragStart);
    note.addEventListener('dragend', handleDragEnd);

    return note;
}

// ===== DRAG & DROP HANDLERS =====
function handleDragStart(e) {
    draggedTaskId = e.target.closest('.sticky-note').id;
    e.target.closest('.sticky-note').classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', draggedTaskId);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    document.querySelectorAll('.task-list').forEach(list => list.classList.remove('drag-over'));
    draggedTaskId = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const list = e.currentTarget;
    list.classList.add('drag-over');
}

function handleDragLeave(e) {
    const list = e.currentTarget;
    const rect = list.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        list.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    const list = e.currentTarget;
    list.classList.remove('drag-over');

    if (!draggedTaskId) return;

    const targetColumn = list.closest('.column');
    const targetStatus = targetColumn.dataset.status;

    const task = tasks.find(t => t.id === draggedTaskId);
    if (!task) return;

    const prevStatus = task.status;
    task.status = targetStatus;

    if (targetStatus === 'done' && prevStatus !== 'done') {
        task.completedAt = new Date().toISOString();
    }

    saveAllData();
    renderAll();

    if (prevStatus !== targetStatus) {
        const colNamesVi = { todo: 'To Do', doing: 'Doing', done: 'Done' };
        showToast(t('toastMoved', { status: colNamesVi[targetStatus] }), 'info');
    }
}

// ===== SCRUM SPRINT DISPLAY =====
function renderScrumHeader() {
    document.getElementById('sprintName').textContent = currentSprint.name;

    const end = new Date(currentSprint.endDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const sprintDaysEl = document.getElementById('sprintDays');
    if (diffDays > 0) {
        sprintDaysEl.textContent = t('sprintDaysRemaining', { days: diffDays });
    } else if (diffDays === 0) {
        sprintDaysEl.textContent = t('sprintDueToday');
    } else {
        sprintDaysEl.textContent = t('sprintOverdue', { days: Math.abs(diffDays) });
    }
}

function renderScrumSprintPanel() {
    // Sprint Goal
    const goalEl = document.getElementById('sprintGoalDisplay');
    goalEl.textContent = currentSprint.goal || t('noGoal');

    // Points calculation
    const totalPoints = tasks.reduce((sum, t) => sum + (parseInt(t.points) || 0), 0);
    const donePoints = tasks
        .filter(t => t.status === 'done')
        .reduce((sum, t) => sum + (parseInt(t.points) || 0), 0);

    const percent = totalPoints > 0 ? Math.round((donePoints / totalPoints) * 100) : 0;

    // Update Progress Ring
    document.getElementById('progressPercent').textContent = `${percent}%`;
    const circle = document.getElementById('progressCircle');
    if (circle) {
        const circumference = 264;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }

    // SP display
    document.getElementById('sprintPoints').textContent = `${donePoints} / ${totalPoints} SP`;

    // Velocity calculate from history
    let velocity = totalPoints;
    if (sprintHistory.length > 0) {
        const sumV = sprintHistory.reduce((s, h) => s + (h.completed || 0), 0);
        velocity = Math.round(sumV / sprintHistory.length);
    }
    document.getElementById('sprintVelocity').textContent = `${velocity} SP/Sprint`;
}

// ===== BURNDOWN CHART =====
function setupBurndownChart() {
    renderBurndown();
}

function renderBurndown() {
    const canvas = document.getElementById('burndownChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Padding
    const padX = 40;
    const padY = 25;
    const chartW = width - padX * 2;
    const chartH = height - padY * 2;

    const totalPoints = tasks.reduce((sum, t) => sum + (parseInt(t.points) || 0), 0) || 10;
    const donePoints = tasks.filter(t => t.status === 'done').reduce((sum, t) => sum + (parseInt(t.points) || 0), 0);
    const remainingPoints = totalPoints - donePoints;

    const totalDays = 10;

    // Draw Grid Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.font = '10px "Be Vietnam Pro", sans-serif';
    ctx.fillStyle = '#6f717d';

    for (let i = 0; i <= 4; i++) {
        const y = padY + (chartH / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padX, y);
        ctx.lineTo(padX + chartW, y);
        ctx.stroke();

        const pt = Math.round(totalPoints - (totalPoints / 4) * i);
        ctx.textAlign = 'right';
        ctx.fillText(`${pt}p`, padX - 8, y + 3);
    }

    // Ideal Burndown Line (Dashed Slate)
    ctx.beginPath();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = '#5b82a6';
    ctx.lineWidth = 2;
    ctx.moveTo(padX, padY);
    ctx.lineTo(padX + chartW, padY + chartH);
    ctx.stroke();
    ctx.setLineDash([]);

    // Actual Burndown Line (Amber Line)
    ctx.beginPath();
    ctx.strokeStyle = '#c48b48';
    ctx.lineWidth = 2.5;

    const actualPoints = [
        totalPoints,
        totalPoints,
        Math.max(0, totalPoints - 3),
        remainingPoints
    ];

    actualPoints.forEach((pt, idx) => {
        const x = padX + (chartW / (totalDays - 1)) * idx;
        const y = padY + chartH - (pt / totalPoints) * chartH;
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Draw dots on actual points
    actualPoints.forEach((pt, idx) => {
        const x = padX + (chartW / (totalDays - 1)) * idx;
        const y = padY + chartH - (pt / totalPoints) * chartH;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#18191f';
        ctx.fill();
        ctx.strokeStyle = '#c48b48';
        ctx.lineWidth = 2;
        ctx.stroke();
    });

    // Legend
    ctx.font = '9px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'left';

    ctx.fillStyle = '#5b82a6';
    ctx.fillRect(padX + 10, height - 10, 12, 3);
    ctx.fillStyle = '#a7a9b2';
    ctx.fillText(t('burndownIdeal'), padX + 26, height - 7);

    ctx.fillStyle = '#c48b48';
    ctx.fillRect(padX + 90, height - 10, 12, 3);
    ctx.fillStyle = '#a7a9b2';
    ctx.fillText(t('burndownActual'), padX + 106, height - 7);
}

// ===== SCRUM TABS =====
function switchScrumTab(tabName) {
    document.querySelectorAll('.scrum-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === tabName);
    });

    document.querySelectorAll('.scrum-content').forEach(c => {
        c.classList.add('hidden');
    });

    const activeContent = document.getElementById(`tab-${tabName}`);
    if (activeContent) activeContent.classList.remove('hidden');

    if (tabName === 'sprint') {
        setTimeout(renderBurndown, 50);
    }
}

// ===== PRODUCT BACKLOG =====
function renderBacklog() {
    const list = document.getElementById('backlogList');
    if (!list) return;

    if (backlog.length === 0) {
        list.innerHTML = `
            <div class="empty-standup">
                <span>📦</span>
                <p>${t('emptyBacklog')}</p>
            </div>
        `;
        return;
    }

    list.innerHTML = '';
    backlog.forEach(item => {
        const card = document.createElement('div');
        card.className = 'backlog-card';

        const priorityInfo = getPriorityInfo(item.priority);

        card.innerHTML = `
            <div class="backlog-header">
                <span class="backlog-title">${escapeHtml(item.title)}</span>
                <span class="note-sp">${item.points || 1} SP</span>
            </div>
            ${item.description ? `<p class="backlog-criteria">${escapeHtml(item.description)}</p>` : ''}
            <div class="backlog-footer">
                <span class="note-priority ${priorityInfo.class}">${priorityInfo.text}</span>
                <div style="display:flex; gap:6px;">
                    <button class="btn-sprint-add" onclick="moveToSprint('${item.id}')" title="${t('btnMoveToSprint')}">${t('btnMoveToSprint')}</button>
                    <button class="btn-icon" onclick="deleteBacklogItem('${item.id}')" title="${currentLang === 'vi' ? 'Xóa' : 'Delete'}">✕</button>
                </div>
            </div>
        `;
        list.appendChild(card);
    });
}

function addBacklogItem() {
    editBacklogId = null;
    document.getElementById('backlogForm').reset();
    document.getElementById('backlogId').value = '';
    document.getElementById('backlogModalTitle').textContent = t('addBacklogTitle');
    document.getElementById('backlogModal').classList.add('active');
}

function closeBacklogModal() {
    document.getElementById('backlogModal').classList.remove('active');
}

function handleBacklogFormSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('backlogTitle').value.trim();
    if (!title) return;

    const desc = document.getElementById('backlogDesc').value.trim();
    const priority = document.getElementById('backlogPriority').value;
    const points = parseInt(document.getElementById('backlogPoints').value) || 3;

    backlog.push({
        id: 'bl-' + Date.now(),
        title,
        description: desc,
        priority,
        points
    });

    saveAllData();
    renderBacklog();
    closeBacklogModal();
    showToast(t('toastAdded', { title }), 'success');
}

function deleteBacklogItem(id) {
    const item = backlog.find(b => b.id === id);
    const title = item ? item.title : '';
    backlog = backlog.filter(b => b.id !== id);
    saveAllData();
    renderBacklog();
    showToast(t('toastDeleted', { title }), 'info');
}

function moveToSprint(backlogId) {
    const item = backlog.find(b => b.id === backlogId);
    if (!item) return;

    // Convert into Kanban Task in To Do
    const newTask = {
        id: 'task-' + Date.now(),
        title: item.title,
        description: item.description,
        priority: item.priority,
        points: item.points,
        color: '#F5F0E1', // Default washi
        status: 'todo',
        dueDate: currentSprint.endDate,
        createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    backlog = backlog.filter(b => b.id !== backlogId);

    saveAllData();
    renderAll();
    showToast(t('toastBacklogMoved', { title: item.title }), 'success');
}

// ===== DAILY STANDUP =====
function renderStandup() {
    const list = document.getElementById('standupList');
    if (!list) return;

    if (standups.length === 0) {
        list.innerHTML = `
            <div class="empty-standup">
                <span>📝</span>
                <p>${t('emptyStandup')}</p>
            </div>
        `;
        return;
    }

    list.innerHTML = '';
    standups.forEach(su => {
        const item = document.createElement('div');
        item.className = 'standup-item';
        item.innerHTML = `
            <div class="standup-text">
                <div class="standup-date">${su.date}</div>
                ${escapeHtml(su.text)}
            </div>
            <button class="standup-delete" onclick="deleteStandup('${su.id}')" title="${currentLang === 'vi' ? 'Xóa' : 'Delete'}">✕</button>
        `;
        list.appendChild(item);
    });
}

function addStandupNote() {
    const text = prompt(t('standupPrompt'));
    if (text && text.trim()) {
        const todayStr = new Date().toLocaleDateString(currentLang === 'vi' ? 'vi-VN' : 'en-US', { weekday: 'short', day: '2-digit', month: '2-digit' });
        standups.unshift({
            id: 'su-' + Date.now(),
            date: todayStr,
            text: text.trim()
        });
        saveAllData();
        renderStandup();
        showToast(t('toastStandupSaved'), 'success');
    }
}

function deleteStandup(id) {
    standups = standups.filter(s => s.id !== id);
    saveAllData();
    renderStandup();
}

// ===== RETROSPECTIVE (KPT) =====
function renderRetro() {
    renderRetroCategory('good', 'retroGood');
    renderRetroCategory('improve', 'retroImprove');
    renderRetroCategory('action', 'retroAction');
}

function renderRetroCategory(key, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const items = retros[key] || [];
    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = `<span style="font-size:0.7rem; color:var(--text-tertiary); padding:4px;">${t('retroEmpty')}</span>`;
        return;
    }

    items.forEach((text, idx) => {
        const el = document.createElement('div');
        el.className = 'retro-item';
        el.innerHTML = `
            <span>${escapeHtml(text)}</span>
            <button onclick="deleteRetroItem('${key}', ${idx})" title="${currentLang === 'vi' ? 'Xóa' : 'Delete'}">✕</button>
        `;
        container.appendChild(el);
    });
}

function addRetroItem(category) {
    const promptKeys = {
        good: 'retroPromptGood',
        improve: 'retroPromptImprove',
        action: 'retroPromptAction'
    };

    const text = prompt(t(promptKeys[category]));
    if (text && text.trim()) {
        if (!retros[category]) retros[category] = [];
        retros[category].push(text.trim());
        saveAllData();
        renderRetro();
        showToast(t('toastRetroSaved'), 'success');
    }
}

function deleteRetroItem(category, index) {
    if (retros[category]) {
        retros[category].splice(index, 1);
        saveAllData();
        renderRetro();
    }
}

// ===== SCRUMBAN KNOWLEDGE & TIPS (BẠN CÓ BIẾT?) =====
const SCRUMBAN_TIPS = [
    {
        id: 1,
        vi: {
            title: 'Quy tắc "Stop Starting, Start Finishing"',
            desc: 'Đừng vội nhận thêm việc mới vào cột Doing khi bạn chưa hoàn thành việc cũ. Giới hạn 2-3 việc cùng lúc sẽ giúp bạn tập trung và tăng 40% tốc độ hoàn thành!'
        },
        en: {
            title: 'Rule: "Stop Starting, Start Finishing"',
            desc: 'Avoid pulling new tasks into Doing before finishing ongoing ones. Keeping at most 2–3 active tasks boosts your delivery speed by up to 40%!'
        }
    },
    {
        id: 2,
        vi: {
            title: 'Cách chia nhỏ Story Points (SP)',
            desc: 'Điểm SP thể hiện độ phức tạp chứ không phải số giờ làm. Nếu một task lớn hơn 5 SP, hãy chia nhỏ thành các việc 1–3 SP để dễ quản lý và dễ đạt mục tiêu hơn.'
        },
        en: {
            title: 'How to estimate Story Points (SP)',
            desc: 'Story points measure complexity, not hours. If a task exceeds 5 SP, split it into smaller 1–3 SP tasks to manage and complete it smoothly.'
        }
    },
    {
        id: 3,
        vi: {
            title: 'Tận dụng Product Backlog hiệu quả',
            desc: 'Đừng vội đưa mọi ý tưởng vào bảng Kanban ngay. Hãy ghi chúng vào tab Backlog. Khi chuẩn bị Sprint mới, chỉ chọn những việc quan trọng nhất và bấm "Đưa vào Sprint"!'
        },
        en: {
            title: 'Use Product Backlog efficiently',
            desc: "Don't dump every raw idea straight into Kanban. Record them in the Backlog tab first. When starting a Sprint, pick the most valuable ones and click 'Move to Sprint'!"
        }
    },
    {
        id: 4,
        vi: {
            title: 'Cách đọc biểu đồ Burndown Chart',
            desc: 'Đường màu lam là tiến độ lý tưởng, đường màu cam là số điểm công việc còn lại thực tế. Nếu đường màu cam nằm dưới hoặc bám sát đường màu lam, nhóm bạn đang kiểm soát tiến độ rất tốt!'
        },
        en: {
            title: 'How to read the Burndown Chart',
            desc: 'The blue line is ideal pace; the amber line shows actual remaining points. If amber stays near or below blue, you are right on track!'
        }
    },
    {
        id: 5,
        vi: {
            title: 'Họp Daily Standup chỉ trong 5 phút',
            desc: 'Mỗi sáng, hãy ghi chú nhanh 3 điều: (1) Hôm qua đã làm gì? (2) Hôm nay cam kết làm gì? (3) Có khó khăn nào cản trở không? Nhận diện trở ngại sớm là chìa khóa của Agile.'
        },
        en: {
            title: 'Daily Standup in 5 minutes',
            desc: 'Each morning, quickly answer 3 questions: (1) What did I do yesterday? (2) What will I do today? (3) Any blockers? Unblocking early is key to Agile.'
        }
    },
    {
        id: 6,
        vi: {
            title: 'Cải tiến liên tục với Kaizen (Retrospective)',
            desc: 'Cuối mỗi Sprint, dành 10 phút mở tab Retro để ghi nhận: Điều gì đã làm tốt (🌸), điều gì cần khắc phục (🍂), và cam kết 1 hành động cải tiến cụ thể (🎋) cho Sprint tiếp theo.'
        },
        en: {
            title: 'Continuous improvement with Kaizen',
            desc: 'At the end of each Sprint, spend 10 minutes in the Retro tab to note: What went well (🌸), what to improve (🍂), and commit to concrete actions (🎋) for the next Sprint.'
        }
    },
    {
        id: 7,
        vi: {
            title: 'Phân loại công việc bằng màu Sticky Note',
            desc: 'Hãy quy ước màu sắc để dễ nhận diện tức thì: Hồng (🌸) cho việc quan trọng/khẩn cấp, Xanh lá (🍵) cho tính năng mới, Chàm (🌊) cho sửa lỗi, và Kem (📜) cho việc thường nhật.'
        },
        en: {
            title: 'Categorize with Sticky Note colors',
            desc: 'Create intuitive color coding: Sakura pink for urgent, Matcha green for new features, Indigo blue for bug fixes, and Washi cream for routine tasks.'
        }
    },
    {
        id: 8,
        vi: {
            title: 'Sức mạnh kết hợp Scrumban (Scrum + Kanban)',
            desc: 'Scrum cung cấp cấu trúc rõ ràng qua nhịp độ Sprint (1-2 tuần) và cam kết mục tiêu; Kanban cung cấp sự linh hoạt trực quan kéo thả. Kết hợp cả hai giúp bạn quản lý công việc vừa kỷ luật vừa linh hoạt!'
        },
        en: {
            title: 'The power of Scrumban',
            desc: 'Scrum gives you clear cadence and Sprint goals; Kanban gives you visual flow and flexibility. Combining both delivers the perfect balance of discipline and agility!'
        }
    }
];

let currentTipIndex = 0;
let tipTimer = null;
let isTipPaused = false;

function renderTip() {
    const tip = SCRUMBAN_TIPS[currentTipIndex];
    if (!tip) return;

    const headingEl = document.getElementById('tipHeading');
    const bodyEl = document.getElementById('tipBody');
    const counterEl = document.getElementById('tipCounter');
    const dotsEl = document.getElementById('tipDots');

    if (!headingEl || !bodyEl) return;

    const tipData = tip[currentLang] || tip.vi;

    headingEl.classList.add('tip-fade-out');
    bodyEl.classList.add('tip-fade-out');

    setTimeout(() => {
        headingEl.textContent = tipData.title;
        bodyEl.textContent = tipData.desc;
        if (counterEl) counterEl.textContent = `${currentTipIndex + 1}/${SCRUMBAN_TIPS.length}`;

        if (dotsEl) {
            dotsEl.innerHTML = '';
            SCRUMBAN_TIPS.forEach((_, idx) => {
                const dot = document.createElement('div');
                dot.className = `tip-dot ${idx === currentTipIndex ? 'active' : ''}`;
                dot.onclick = () => goToTip(idx);
                dotsEl.appendChild(dot);
            });
        }

        headingEl.classList.remove('tip-fade-out');
        bodyEl.classList.remove('tip-fade-out');
    }, 120);
}

function nextTip() {
    currentTipIndex = (currentTipIndex + 1) % SCRUMBAN_TIPS.length;
    renderTip();
}

function prevTip() {
    currentTipIndex = (currentTipIndex - 1 + SCRUMBAN_TIPS.length) % SCRUMBAN_TIPS.length;
    renderTip();
}

function goToTip(idx) {
    currentTipIndex = idx;
    renderTip();
}

function startTipAutoPlay() {
    if (tipTimer) clearInterval(tipTimer);
    tipTimer = setInterval(() => {
        if (!isTipPaused) {
            nextTip();
        }
    }, 7000);
}

function pauseTipAutoPlay() {
    isTipPaused = true;
}

function resumeTipAutoPlay() {
    isTipPaused = false;
}

// ===== SPRINT MODAL & END SPRINT =====
function openSprintModal() {
    document.getElementById('sprintNameInput').value = currentSprint.name;
    document.getElementById('sprintGoalInput').value = currentSprint.goal;
    document.getElementById('sprintStart').value = currentSprint.startDate;
    document.getElementById('sprintEnd').value = currentSprint.endDate;
    document.getElementById('sprintModal').classList.add('active');
}

function closeSprintModal() {
    document.getElementById('sprintModal').classList.remove('active');
}

function handleSprintFormSubmit(e) {
    e.preventDefault();
    currentSprint.name = document.getElementById('sprintNameInput').value.trim() || 'Sprint';
    currentSprint.goal = document.getElementById('sprintGoalInput').value.trim();
    currentSprint.startDate = document.getElementById('sprintStart').value;
    currentSprint.endDate = document.getElementById('sprintEnd').value;

    saveAllData();
    renderAll();
    closeSprintModal();
    showToast(t('toastSprintUpdated'), 'success');
}

function endCurrentSprint() {
    if (!confirm(t('confirmEndSprint', { name: currentSprint.name }))) {
        return;
    }

    const doneTasks = tasks.filter(t => t.status === 'done');
    const completedSP = doneTasks.reduce((s, t) => s + (parseInt(t.points) || 0), 0);
    const totalSP = tasks.reduce((s, t) => s + (parseInt(t.points) || 0), 0);

    // Save to history
    sprintHistory.push({
        name: currentSprint.name,
        goal: currentSprint.goal,
        points: totalSP,
        completed: completedSP,
        endDate: new Date().toLocaleDateString(currentLang === 'vi' ? 'vi-VN' : 'en-US')
    });

    // Remove done tasks, keep remaining in To-do/Doing
    tasks = tasks.filter(t => t.status !== 'done');

    // Auto increment Sprint number
    const nextNum = (parseInt(currentSprint.name.replace(/\D/g, '')) || 1) + 1;
    currentSprint.name = `Sprint ${nextNum}`;
    currentSprint.startDate = getFormattedDate(0);
    currentSprint.endDate = getFormattedDate(14);
    currentSprint.goal = currentLang === 'vi' ? 'Mục tiêu Sprint mới' : 'New Sprint Goal';

    // Clear sprint standup/retro for new sprint
    standups = [];
    retros = { good: [], improve: [], action: [] };

    saveAllData();
    renderAll();
    closeSprintModal();
    showToast(t('toastSprintEnded', { name: currentSprint.name }), 'success');
}

// ===== TASK MODAL & CRUD =====
function openTaskModal(taskId = null) {
    editTaskId = taskId;
    const form = document.getElementById('taskForm');
    form.reset();

    // Default select Washi color
    document.querySelectorAll('#colorPicker .color-option').forEach(o => o.classList.remove('selected'));
    document.querySelector('#colorPicker .color-option[data-color="#F5F0E1"]').classList.add('selected');

    if (taskId) {
        const task = tasks.find(t => t.id === taskId);
        if (!task) return;

        document.getElementById('modalTitle').textContent = t('modalEditTaskTitle');
        document.getElementById('taskId').value = task.id;
        document.getElementById('taskTitle').value = task.title;
        document.getElementById('taskDesc').value = task.description || '';
        document.getElementById('taskPriority').value = task.priority || 'medium';
        document.getElementById('taskPoints').value = task.points || '3';
        document.getElementById('taskStatus').value = task.status || 'todo';
        document.getElementById('taskDueDate').value = task.dueDate || '';

        // Select color
        let colorFound = false;
        document.querySelectorAll('#colorPicker .color-option').forEach(o => {
            const isMatch = (o.dataset.color || '').toLowerCase() === (task.color || '').toLowerCase();
            o.classList.toggle('selected', isMatch);
            if (isMatch) colorFound = true;
        });
        if (!colorFound) {
            const defaultOpt = document.querySelector('#colorPicker .color-option[data-color="#F5F0E1"]');
            if (defaultOpt) defaultOpt.classList.add('selected');
        }
    } else {
        document.getElementById('modalTitle').textContent = t('modalAddTaskTitle');
        document.getElementById('taskId').value = '';
        document.getElementById('taskPoints').value = '3';
        document.getElementById('taskPriority').value = 'medium';
        document.getElementById('taskStatus').value = 'todo';
    }

    document.getElementById('taskModal').classList.add('active');
    setTimeout(() => document.getElementById('taskTitle').focus(), 80);
}

function closeModal() {
    document.getElementById('taskModal').classList.remove('active');
    editTaskId = null;
}

function handleTaskFormSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('taskTitle').value.trim();
    if (!title) return;

    const selectedColor = document.querySelector('#colorPicker .color-option.selected');
    const color = selectedColor ? selectedColor.dataset.color : '#F5F0E1';

    const taskData = {
        title: title,
        description: document.getElementById('taskDesc').value.trim(),
        priority: document.getElementById('taskPriority').value,
        points: parseInt(document.getElementById('taskPoints').value) || 3,
        color: color,
        status: document.getElementById('taskStatus').value,
        dueDate: document.getElementById('taskDueDate').value || null
    };

    const taskId = document.getElementById('taskId').value;

    if (editTaskId && taskId) {
        const idx = tasks.findIndex(t => t.id === taskId);
        if (idx !== -1) {
            tasks[idx] = { ...tasks[idx], ...taskData };
            showToast(t('toastUpdated', { title }), 'success');
        }
    } else {
        const newTask = {
            id: 'task-' + Date.now(),
            ...taskData,
            createdAt: new Date().toISOString()
        };
        tasks.push(newTask);
        showToast(t('toastAdded', { title }), 'success');
    }

    saveAllData();
    renderAll();
    closeModal();
}

function editTask(taskId) {
    openTaskModal(taskId);
}

function requestDeleteTask(taskId) {
    deleteTargetId = taskId;
    document.getElementById('deleteModal').classList.add('active');
}

function closeDeleteModal() {
    document.getElementById('deleteModal').classList.remove('active');
    deleteTargetId = null;
}

function confirmDelete() {
    if (!deleteTargetId) return;
    const task = tasks.find(t => t.id === deleteTargetId);
    const title = task ? task.title : '';

    tasks = tasks.filter(t => t.id !== deleteTargetId);
    saveAllData();
    renderAll();
    closeDeleteModal();
    showToast(t('toastDeleted', { title }), 'info');
}

function closeAllModals() {
    closeModal();
    closeDeleteModal();
    closeSprintModal();
    closeBacklogModal();
}

// ===== UTILITIES =====
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
        success: '🌸',
        info: '🍵',
        warning: '🍂',
        error: '🎋'
    };

    toast.innerHTML = `<span>${icons[type] || '🍵'}</span> ${message}`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 260);
    }, 2800);
}
