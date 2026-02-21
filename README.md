# intelligent-data-dictionary-agent
Overview:

Intelligent Data Dictionary Agent is a profiling-grounded AI system designed to automatically generate business-ready documentation from enterprise database schemas. It combines deterministic statistical profiling with LLM-based interpretation to produce reliable, context-aware documentation.

Problem Statement:

Enterprise databases are complex and frequently updated, but documentation is often outdated and purely technical. This creates a gap between schema structure and business understanding, leading to misinterpretation, reporting errors, and compliance risks.

Proposed Solution:

The system extracts schema metadata from PostgreSQL, performs deterministic profiling (row count, null %, uniqueness), and sends structured context to a Large Language Model (Gemini) to generate grounded documentation with reduced hallucination risk.

System Architecture:

![System Architecture](architecture_image_name.png)

Planned Tech Stack:

1. Python
2. FastAPI
3. PostgreSQL
4. Pandas
5. Gemini API
6. React (minimal UI)

Implementation Plan (Coding Round):

1.Connect to PostgreSQL
2.Extract tables and columns
3.Compute profiling metrics
4.Generate structured prompt
5.Call Gemini API
6.Display output in minimal UI   
