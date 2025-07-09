import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeProject, setActiveProject] = useState("web-project");
  const [draggedTask, setDraggedTask] = useState(null);

  const projects = [
    { id: "web-project", name: "Веб-проект", key: "WEB", type: "Software" },
    {
      id: "mobile-app",
      name: "Мобильное приложение",
      key: "MOB",
      type: "Software",
    },
    { id: "api-gateway", name: "API Gateway", key: "API", type: "Software" },
  ];

  const [tasks, setTasks] = useState([
    {
      id: "WEB-1",
      title: "Настройка системы аутентификации",
      description: "Реализовать OAuth 2.0 и JWT токены",
      status: "todo",
      priority: "highest",
      assignee: "Алексей Иванов",
      reporter: "Мария Петрова",
      storyPoints: 8,
      labels: ["backend", "security"],
    },
    {
      id: "WEB-2",
      title: "Разработка REST API",
      description: "Создать endpoints для управления пользователями",
      status: "inprogress",
      priority: "high",
      assignee: "Мария Петрова",
      reporter: "Алексей Иванов",
      storyPoints: 5,
      labels: ["backend", "api"],
    },
    {
      id: "WEB-3",
      title: "Тестирование интерфейса",
      description: "Написать unit и integration тесты",
      status: "done",
      priority: "medium",
      assignee: "Иван Сидоров",
      reporter: "Анна Козлова",
      storyPoints: 3,
      labels: ["frontend", "testing"],
    },
    {
      id: "WEB-4",
      title: "Написание документации",
      description: "Создать техническую документацию API",
      status: "todo",
      priority: "low",
      assignee: "Анна Козлова",
      reporter: "Мария Петрова",
      storyPoints: 2,
      labels: ["docs"],
    },
    {
      id: "WEB-5",
      title: "Оптимизация производительности",
      description: "Улучшить время загрузки страниц",
      status: "inprogress",
      priority: "medium",
      assignee: "Иван Сидоров",
      reporter: "Алексей Иванов",
      storyPoints: 13,
      labels: ["frontend", "performance"],
    },
  ]);

  const sidebarItems = [
    {
      title: "Ваша работа",
      items: [
        { title: "Дашборд", icon: "BarChart3", isActive: true },
        { title: "Назначенные мне", icon: "User", badge: "12" },
        { title: "Недавние", icon: "Clock" },
        { title: "Созданные мной", icon: "UserPlus" },
        { title: "Просмотренные", icon: "Eye" },
      ],
    },
    {
      title: "Проекты",
      items: [
        { title: "Веб-проект", icon: "Globe", key: "WEB" },
        { title: "Мобильное приложение", icon: "Smartphone", key: "MOB" },
        { title: "API Gateway", icon: "Server", key: "API" },
      ],
    },
    {
      title: "Фильтры",
      items: [
        { title: "Просмотреть все задачи", icon: "List" },
        { title: "Недавно обновленные", icon: "RefreshCw" },
        { title: "Активные спринты", icon: "Target" },
      ],
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "highest":
        return "text-red-600";
      case "high":
        return "text-orange-600";
      case "medium":
        return "text-yellow-600";
      case "low":
        return "text-green-600";
      case "lowest":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "highest":
        return "ArrowUp";
      case "high":
        return "ArrowUp";
      case "medium":
        return "ArrowRight";
      case "low":
        return "ArrowDown";
      case "lowest":
        return "ArrowDown";
      default:
        return "ArrowRight";
    }
  };

  const handleDragStart = (e, task) => {
    setDraggedTask(task);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    if (draggedTask) {
      setTasks(
        tasks.map((task) =>
          task.id === draggedTask.id ? { ...task, status: newStatus } : task,
        ),
      );
      setDraggedTask(null);
    }
  };

  const TaskCard = ({ task }) => (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, task)}
      className="bg-white rounded-lg p-3 shadow-sm border hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Icon name="FileText" size={16} className="text-blue-600" />
          <span className="text-sm font-medium text-gray-600">{task.id}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Icon
            name={getPriorityIcon(task.priority)}
            size={14}
            className={getPriorityColor(task.priority)}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <Icon name="MoreHorizontal" size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Редактировать</DropdownMenuItem>
              <DropdownMenuItem>Удалить</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <h4 className="font-medium text-sm mb-2 text-gray-900">{task.title}</h4>
      <p className="text-xs text-gray-600 mb-3">{task.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {task.labels.map((label, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs px-2 py-0.5"
            >
              {label}
            </Badge>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">{task.storyPoints} SP</span>
          <Avatar className="h-6 w-6">
            <AvatarFallback className="text-xs">
              {task.assignee
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar className="border-r border-gray-200 bg-white">
          <SidebarHeader className="border-b border-gray-200 px-4 py-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Jira</h1>
                <p className="text-xs text-gray-500">Управление проектами</p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <div className="px-3 py-2">
              <Input
                placeholder="Поиск задач..."
                className="h-8"
                prefix={<Icon name="Search" size={14} />}
              />
            </div>

            {sidebarItems.map((section, index) => (
              <SidebarGroup key={index}>
                <SidebarGroupLabel className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {section.title}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item, itemIndex) => (
                      <SidebarMenuItem key={itemIndex}>
                        <SidebarMenuButton
                          isActive={item.isActive}
                          className="w-full justify-start text-sm"
                        >
                          <Icon name={item.icon} size={16} />
                          <span>{item.title}</span>
                          {item.badge && (
                            <Badge
                              variant="secondary"
                              className="ml-auto text-xs"
                            >
                              {item.badge}
                            </Badge>
                          )}
                          {item.key && (
                            <span className="ml-auto text-xs text-gray-500">
                              {item.key}
                            </span>
                          )}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
                {index < sidebarItems.length - 1 && <SidebarSeparator />}
              </SidebarGroup>
            ))}
          </SidebarContent>

          <SidebarFooter className="border-t border-gray-200 px-4 py-3">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback>АИ</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  Алексей Иванов
                </p>
                <p className="text-xs text-gray-500">alexey@company.com</p>
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Icon name="Settings" size={16} />
              </Button>
            </div>
          </SidebarFooter>

          <SidebarRail />
        </Sidebar>

        {/* Main Content */}
        <SidebarInset className="flex-1">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger className="md:hidden" />
                <div className="flex items-center space-x-2">
                  <Icon name="Globe" size={20} className="text-blue-600" />
                  <h1 className="text-xl font-semibold text-gray-900">
                    Веб-проект
                  </h1>
                  <Badge variant="secondary" className="text-xs">
                    WEB
                  </Badge>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Icon name="Filter" size={16} className="mr-2" />
                  Фильтры
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Users" size={16} className="mr-2" />
                  Поделиться
                </Button>
                <Button size="sm">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать
                </Button>
              </div>
            </div>
          </header>

          {/* Kanban Board */}
          <main className="flex-1 p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Доска задач
              </h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>{tasks.length} задач</span>
                <span>•</span>
                <span>Активный спринт</span>
                <span>•</span>
                <span>Обновлено 2 мин назад</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
              {/* To Do Column */}
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-900">К выполнению</h3>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {tasks.filter((task) => task.status === "todo").length}
                    </Badge>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Icon name="Plus" size={14} />
                    </Button>
                  </div>
                </div>
                <div
                  className="space-y-3 min-h-[200px]"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, "todo")}
                >
                  {tasks
                    .filter((task) => task.status === "todo")
                    .map((task) => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                </div>
              </div>

              {/* In Progress Column */}
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-900">В работе</h3>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {
                        tasks.filter((task) => task.status === "inprogress")
                          .length
                      }
                    </Badge>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Icon name="Plus" size={14} />
                    </Button>
                  </div>
                </div>
                <div
                  className="space-y-3 min-h-[200px]"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, "inprogress")}
                >
                  {tasks
                    .filter((task) => task.status === "inprogress")
                    .map((task) => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                </div>
              </div>

              {/* Done Column */}
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-900">Выполнено</h3>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {tasks.filter((task) => task.status === "done").length}
                    </Badge>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Icon name="Plus" size={14} />
                    </Button>
                  </div>
                </div>
                <div
                  className="space-y-3 min-h-[200px]"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, "done")}
                >
                  {tasks
                    .filter((task) => task.status === "done")
                    .map((task) => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
