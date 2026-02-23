import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      id: "languages",
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["Python", "SQL"]
    },
    {
      id: "data-engineering",
      title: "Data Engineering",
      icon: <Database className="h-5 w-5" />,
      skills: ["PySpark", "Databricks", "Apache Airflow", "Snowflake", "DBT", "Delta Lake"]
    },
    {
      id: "databases",
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: ["PostgreSQL", "MySQL", "DynamoDB"]
    },
    {
      id: "cloud-tools",
      title: "Cloud & Tools",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["AWS", "Azure", "Git", "GitHub"]
    },
    {
      id: "genai",
      title: "GenAI",
      icon: <Brain className="h-5 w-5" />,
      skills: ["HuggingFace", "LangChain", "LangGraph", "RAG", "LLMs", "Vector Databases"]
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category) => (
            <Card key={category.id} className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
