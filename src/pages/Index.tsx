import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tasks = [
    {
      id: 1,
      title: "Настройка аутентификации",
      status: "todo",
      priority: "high",
      assignee: "Алексей",
    },
    {
      id: 2,
      title: "Разработка API",
      status: "inprogress",
      priority: "medium",
      assignee: "Мария",
    },
    {
      id: 3,
      title: "Тестирование UI",
      status: "done",
      priority: "low",
      assignee: "Иван",
    },
    {
      id: 4,
      title: "Написание документации",
      status: "todo",
      priority: "medium",
      assignee: "Анна",
    },
  ];

  const projects = [
    { id: 1, name: "Веб-платформа", progress: 75, team: "Frontend", tasks: 12 },
    {
      id: 2,
      name: "Мобильное приложение",
      progress: 45,
      team: "Mobile",
      tasks: 8,
    },
    { id: 3, name: "API Gateway", progress: 90, team: "Backend", tasks: 6 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "todo":
        return "bg-gray-100 text-gray-800";
      case "inprogress":
        return "bg-blue-100 text-blue-800";
      case "done":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Kanban" size={32} className="text-primary" />
                <h1 className="text-2xl font-bold text-gray-900">ProjectHub</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </Button>
              <Button size="sm">
                <Icon name="Plus" size={16} className="mr-2" />
                Создать проект
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Управление проектами нового поколения
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Планируйте, отслеживайте и управляйте проектами с помощью
            современных инструментов. Система ролей, трекинг времени и
            автоматизация процессов.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Начать бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary"
            >
              Посмотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="dashboard">Дашборд</TabsTrigger>
            <TabsTrigger value="kanban">Канбан</TabsTrigger>
            <TabsTrigger value="reports">Отчеты</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Projects */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="FolderOpen" size={20} className="mr-2" />
                    Активные проекты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">
                            {project.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {project.team} • {project.tasks} задач
                          </p>
                          <Progress value={project.progress} className="mt-2" />
                        </div>
                        <div className="ml-4 text-right">
                          <span className="text-sm font-medium text-gray-900">
                            {project.progress}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="BarChart3" size={20} className="mr-2" />
                      Статистика
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          Всего задач
                        </span>
                        <span className="font-semibold">26</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Выполнено</span>
                        <span className="font-semibold text-green-600">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">В работе</span>
                        <span className="font-semibold text-blue-600">8</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          Просрочено
                        </span>
                        <span className="font-semibold text-red-600">2</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Users" size={20} className="mr-2" />
                      Команды
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Frontend</span>
                        <Badge variant="secondary">4 участника</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Backend</span>
                        <Badge variant="secondary">3 участника</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Mobile</span>
                        <Badge variant="secondary">2 участника</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Kanban Tab */}
          <TabsContent value="kanban" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* To Do Column */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>К выполнению</span>
                    <Badge variant="secondary">2</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tasks
                      .filter((task) => task.status === "todo")
                      .map((task) => (
                        <div
                          key={task.id}
                          className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <h4 className="font-medium mb-2">{task.title}</h4>
                          <div className="flex items-center justify-between">
                            <Badge className={getPriorityColor(task.priority)}>
                              {task.priority === "high"
                                ? "Высокий"
                                : task.priority === "medium"
                                  ? "Средний"
                                  : "Низкий"}
                            </Badge>
                            <span className="text-sm text-gray-500">
                              {task.assignee}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* In Progress Column */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>В работе</span>
                    <Badge variant="secondary">1</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tasks
                      .filter((task) => task.status === "inprogress")
                      .map((task) => (
                        <div
                          key={task.id}
                          className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <h4 className="font-medium mb-2">{task.title}</h4>
                          <div className="flex items-center justify-between">
                            <Badge className={getPriorityColor(task.priority)}>
                              {task.priority === "high"
                                ? "Высокий"
                                : task.priority === "medium"
                                  ? "Средний"
                                  : "Низкий"}
                            </Badge>
                            <span className="text-sm text-gray-500">
                              {task.assignee}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Done Column */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Выполнено</span>
                    <Badge variant="secondary">1</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tasks
                      .filter((task) => task.status === "done")
                      .map((task) => (
                        <div
                          key={task.id}
                          className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <h4 className="font-medium mb-2">{task.title}</h4>
                          <div className="flex items-center justify-between">
                            <Badge className={getPriorityColor(task.priority)}>
                              {task.priority === "high"
                                ? "Высокий"
                                : task.priority === "medium"
                                  ? "Средний"
                                  : "Низкий"}
                            </Badge>
                            <span className="text-sm text-gray-500">
                              {task.assignee}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Clock" size={20} className="mr-2" />
                    Трекинг времени
                  </CardTitle>
                  <CardDescription>
                    Отчет по времени за последнюю неделю
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Алексей</span>
                      <span className="font-semibold">42ч 30м</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Мария</span>
                      <span className="font-semibold">38ч 15м</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Иван</span>
                      <span className="font-semibold">35ч 45м</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Анна</span>
                      <span className="font-semibold">40ч 20м</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="TrendingUp" size={20} className="mr-2" />
                    Аналитика
                  </CardTitle>
                  <CardDescription>Производительность команды</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Выполнено задач</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Соблюдение дедлайнов</span>
                        <span>88%</span>
                      </div>
                      <Progress value={88} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Качество кода</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
