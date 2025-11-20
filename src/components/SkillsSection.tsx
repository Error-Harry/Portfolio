import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Database, Wrench, Brain, Globe, Server } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      id: "languages",
      title: "Languages & Backend",
      icon: <Code className="h-5 w-5" />,
      skills: [
        "Python", "SQL", "JavaScript", "TypeScript", "C++", "FastAPI", "Node.js"
      ]
    },
    {
      id: "data-engineering",
      title: "Data Engineering & Databases",
      icon: <Database className="h-5 w-5" />,
      skills: [
        "ETL/ELT", "Apache Airflow", "PySpark", "Databricks", "BigQuery", 
        "PostgreSQL", "MySQL", "MongoDB", "Vector Databases"
      ]
    },
    {
      id: "devops",
      title: "DevOps, Cloud & Testing",
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        "Git", "GitHub", "CI/CD", "GCP", "Pytest", "Unittest"
      ]
    },
    {
      id: "genai",
      title: "GenAI",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        "HuggingFace", "LangChain", "LangGraph", "RAG", "LLMs"
      ]
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my data engineering and Gen AI expertise
          </p>
        </div>

        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-white dark:bg-slate-800 p-1 rounded-xl shadow-lg">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg transition-all duration-300"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <CardHeader className="text-center">
              <Database className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <CardTitle className="text-slate-900 dark:text-white">Data Engineering</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 dark:text-slate-400">
                Expert in building scalable ETL pipelines, optimizing data workflows, and delivering reliable datasets for analytics and AI
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <CardHeader className="text-center">
              <Brain className="h-12 w-12 mx-auto text-purple-600 mb-4" />
              <CardTitle className="text-slate-900 dark:text-white">Gen AI Solutions</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 dark:text-slate-400">
                Implementing AI solutions with LLMs, RAG systems, and machine learning workflows for intelligent automation
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
