import React from 'react';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiCelery,
  SiRedis,
  SiPostgresql,
  SiSqlite,
  SiDocker,
  SiGit,
  SiPostman,
  SiJsonwebtokens,
  SiWebrtc,
  SiSocketdotio,
  SiReact,
  SiLangchain,
  SiScikitlearn,
  SiPydantic,
  SiPandas,
  SiGooglegemini,
  SiPytest,
} from 'react-icons/si';
import { FaAws, FaGithub, FaLinkedin, FaEnvelope, FaFileLines, FaGlobe, FaPhone } from 'react-icons/fa6';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function TechIcon({ name, className = 'w-5 h-5', size }: TechIconProps) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (normalized) {
    // Languages
    case 'python':
      return <SiPython className={className} size={size} style={{ color: '#3776AB' }} />;
    case 'javascript':
    case 'js':
      return <SiJavascript className={className} size={size} style={{ color: '#F7DF1E' }} />;
    case 'typescript':
    case 'ts':
      return <SiTypescript className={className} size={size} style={{ color: '#3178C6' }} />;
    case 'go':
    case 'golang':
      return <SiGo className={className} size={size} style={{ color: '#00ADD8' }} />;
    case 'c':
    case 'cpp':
    case 'cplusplus':
      return <SiCplusplus className={className} size={size} style={{ color: '#00599C' }} />;
    case 'html':
    case 'html5':
    case 'htmlcss':
      return <SiHtml5 className={className} size={size} style={{ color: '#E34F26' }} />;
    case 'css':
    case 'css3':
      return <SiCss className={className} size={size} style={{ color: '#1572B6' }} />;

    // Frameworks & Backend
    case 'fastapi':
      return <SiFastapi className={className} size={size} style={{ color: '#009688' }} />;
    case 'django':
    case 'drf':
    case 'djangorestframework':
    case 'djangochannels':
      return <SiDjango className={className} size={size} style={{ color: '#092E20' }} />;
    case 'flask':
      return <SiFlask className={className} size={size} style={{ color: '#000000' }} />;
    case 'celery':
      return <SiCelery className={className} size={size} style={{ color: '#37814A' }} />;
    case 'redis':
    case 'redisstreams':
      return <SiRedis className={className} size={size} style={{ color: '#DC382D' }} />;

    // AI / ML
    case 'langchain':
    case 'langsmith':
      return <SiLangchain className={className} size={size} style={{ color: '#1C3C3C' }} />;
    case 'scikitlearn':
    case 'sklearn':
      return <SiScikitlearn className={className} size={size} style={{ color: '#F7931E' }} />;
    case 'pydantic':
      return <SiPydantic className={className} size={size} style={{ color: '#E92063' }} />;
    case 'pandas':
      return <SiPandas className={className} size={size} style={{ color: '#150458' }} />;
    case 'gemini':
    case 'googlegemini':
      return <SiGooglegemini className={className} size={size} style={{ color: '#8E75FF' }} />;
    case 'xgboost':
    case 'smote':
      return <SiScikitlearn className={className} size={size} style={{ color: '#FF6F00' }} />;

    // Databases
    case 'postgresql':
    case 'postgres':
      return <SiPostgresql className={className} size={size} style={{ color: '#4169E1' }} />;
    case 'sqlite':
      return <SiSqlite className={className} size={size} style={{ color: '#003B57' }} />;

    // Real-Time
    case 'websockets':
    case 'websocket':
    case 'asgi':
      return <SiSocketdotio className={className} size={size} style={{ color: '#010101' }} />;
    case 'webrtc':
      return <SiWebrtc className={className} size={size} style={{ color: '#333333' }} />;
    case 'react':
      return <SiReact className={className} size={size} style={{ color: '#61DAFB' }} />;

    // Cloud & DevOps
    case 'aws':
      return <FaAws className={className} size={size} style={{ color: '#FF9900' }} />;
    case 'docker':
      return <SiDocker className={className} size={size} style={{ color: '#2496ED' }} />;
    case 'git':
      return <SiGit className={className} size={size} style={{ color: '#F05032' }} />;
    case 'github':
      return <FaGithub className={className} size={size} style={{ color: '#181717' }} />;
    case 'postman':
      return <SiPostman className={className} size={size} style={{ color: '#FF6C37' }} />;
    case 'jwt':
    case 'oauth':
      return <SiJsonwebtokens className={className} size={size} style={{ color: '#000000' }} />;
    case 'pytest':
      return <SiPytest className={className} size={size} style={{ color: '#0A9EDC' }} />;

    // General Social / Contact
    case 'linkedin':
      return <FaLinkedin className={className} size={size} style={{ color: '#0A66C2' }} />;
    case 'email':
    case 'mail':
      return <FaEnvelope className={className} size={size} />;
    case 'resume':
    case 'document':
      return <FaFileLines className={className} size={size} />;
    case 'portfolio':
    case 'web':
      return <FaGlobe className={className} size={size} />;
    case 'phone':
      return <FaPhone className={className} size={size} />;

    default:
      return null;
  }
}
