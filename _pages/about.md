---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am Yihao Zhang (张益豪), a First-Year Applied Mathematics PhD at the School of Mathematical Sciences, Peking University. I am currently conducting research under the guidance of Professor [Meng Sun](https://www.math.pku.edu.cn/teachers/sunm/index.html) and am a part of his research group.

I got my bachelor's degree (Data Science, Math) from Peking University in 2024. I served as a visiting research assistant at Singapore Management University, from October 2023 to May 2024. My supervisor at Singapore Management University is [Jun Sun](https://sunjun.site/).

My research interests include:
- Safety, Interpretability and Social Value for Large Language Model-based Agents **(Currently Focusing On)**
- Mechanistic Interpretability for Large Language Models **(Currently Focusing On)**
- Causality in AI, Formalization and Verification of Causality-Related Issues **(Currently Focusing On)**
- Large Language Model Alignment, Trustworthy LLM
- Representation Engineering in LLM
- AI Safety, Verifying Robustness/Fairness/Trustworthy Related Issues in AI
- Automated Interactive Theorem Proving, AI4ITP
- Formal Methods, Model Checking, Software Analysis, Program Verification
- Formalizing and Verifying Quantum Computation Systems and Quantum AI Systems
- Testing Technologies for AI System

I have published multiple papers at different international conferences with total google scholar <a href='https://scholar.google.com/citations?user=9lALkz8AAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>.

If you wish to access my personal homepage before 2024, please click [here](https://zhang-yihao.github.io/oldsite). [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fzhang-yihao.github.io&count_bg=%23000000&title_bg=%23555555&icon=github.svg&icon_color=%23FFFFFF&title=Website+Hits&edge_flat=false)](https://hits.seeyoufarm.com)

# 🔥 News
- *2024.12*: &nbsp;🎉 2 Papers (as first author and second-to-last author, respectively) accepted by ICASSP.
- *2024.11*: &nbsp;✈️ We presented [our paper](https://arxiv.org/pdf/2404.13752) in NeurIPS 2024 main conference (poster).
- *2024.10*: &nbsp;🎉 We presented [our paper](https://arxiv.org/pdf/2402.15152) in 2nd Frontier Ph.D Forum hosted in Peking University.
- *2024.09*: &nbsp;🎉 1 Paper (as second author) accepted by SETTA 2024.
- *2024.09*: &nbsp;🎉 Our paper, [Adversarial Representation Engineering: A General Model Editing Framework for Large Language Models](https://arxiv.org/pdf/2404.13752), is accepted by NeurIPS 2024.
- *2024.09*: &nbsp;✈️ I started my PhD career at Peking University!
- *2024.07*: &nbsp;✈️ We presented [our paper](https://arxiv.org/pdf/2402.15152) in ICML 2024 main conference (poster).
- *2024.06*: &nbsp;🎉 I am graduating from Peking University and starting my Ph.D. My undergraduate thesis, [Automata Extraction from Transformers](https://arxiv.org/pdf/2406.05564), is posted on arxiv.
- *2024.05*: &nbsp;🎉 Our paper, [On the Duality Between Sharpness-Aware Minimization and Adversarial Training](https://arxiv.org/pdf/2402.15152), is accepted by ICML 2024.
- *2024.04*: &nbsp;🎉 I finished my paper, [Adversarial Representation Engineering: A General Model Editing Framework for Large Language Models](https://arxiv.org/pdf/2404.13752), which is posted on arxiv. Our [repository](https://github.com/Zhang-Yihao/Adversarial-Representation-Engineering) has got 5 stars🌟 on GitHub! 
- *2024.03*: &nbsp;🎉 2 Papers (as first author and second-to-last author, respectively) accepted by ICLR 2024 R2-FM Workshop.
- *2023.12*: &nbsp;💸 My application for the Beijing Natural Science Foundation Undergraduate "Initiating Research" Program has been approved.
- *2023.10*: &nbsp;✈️ I am now going to Singapore Management University for a six-month exchange.
- *2023.09*: &nbsp;🎉 Our paper, [MedTiny: Enhanced Mediator Modeling Language for Scalable Parallel Algorithms](https://qrs23.techconf.org/download/webpub/pdfs/QRS-C2023-56EpUKA3a3CGa6xc1KYNzL/593900a441/593900a441.pdf), is accepted by QRS-C 2023.
- *2023.05*: &nbsp;🎉 Our paper, [Sharpness-Aware Minimization Alone can Improve Adversarial Robustness](https://arxiv.org/pdf/2305.05392v1.pdf), is accepted by 2nd AdvML-Frontiers@ICML 2023.
- *2023.04*: &nbsp;🎉🎉 I have been accepted into the Applied Mathematics Elite Program by the School of Mathematical Sciences at Peking University (only 1 per year), which means that I am expected to spend five years here as a doctoral student.

# 📝 Selected Papers 
(*: Equal Contribution; ${}^\dagger$: Corresponding Author)

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2024</div><img src='images/SAMAT.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
## On the Duality Between Sharpness-Aware Minimization and Adversarial Training (ICML 2024)
**Yihao Zhang**\*, Hangzhou He\*, Jingyu Zhu\*, Huanran Chen, Yifei Wang, Zeming Wei${}^\dagger$

Adversarial Training (AT), which adversarially perturb the input samples during training, has been acknowledged as one of the most effective defenses against adversarial attacks, yet suffers from a fundamental tradeoff that inevitably decreases clean accuracy. Instead of perturbing the samples, Sharpness-Aware Minimization (SAM) perturbs the model weights during training to find a more flat loss landscape and improve generalization. However, as SAM is designed for better clean accuracy, its effectiveness in enhancing adversarial robustness remains unexplored. In this work, considering the duality between SAM and AT, we investigate the adversarial robustness derived from SAM. Intriguingly, we find that using SAM alone can improve adversarial robustness. To understand this unexpected property of SAM, we first provide empirical and theoretical insights into how SAM can implicitly learn more robust features, and conduct comprehensive experiments to show that SAM can improve adversarial robustness notably without sacrificing any clean accuracy, shedding light on the potential of SAM to be a substitute for AT when accuracy comes at a higher priority. Code is available at [this https URL](https://github.com/weizeming/SAM_AT).

[[pdf](https://arxiv.org/pdf/2402.15152)] [[arxiv](https://arxiv.org/abs/2402.15152)] [[code](https://github.com/weizeming/SAM_AT)]
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2024</div><img src='images/ARE.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
## Adversarial Representation Engineering: A General Model Editing Framework for Large Language Models (NeurIPS 2024)
**Yihao Zhang**, Zeming Wei, Jun Sun${}^\dagger$, Meng Sun${}^\dagger$

Since the development of Large Language Models (LLMs) has achieved remarkable success, understanding and controlling their internal complex mechanisms has become an urgent problem. Recent research has attempted to interpret their behaviors through the lens of inner representation. However, developing practical and efficient methods for applying these representations for general and flexible model editing remains challenging. In this work, we explore how to use representation engineering methods to guide the editing of LLMs by deploying a representation sensor as an oracle. We first identify the importance of a robust and reliable sensor during editing, then propose an Adversarial Representation Engineering (ARE) framework to provide a unified and interpretable approach for conceptual model editing without compromising baseline performance. Experiments on multiple model editing paradigms demonstrate the effectiveness of ARE in various settings. Code and data are available at [this https URL](https://github.com/Zhang-Yihao/Adversarial-Representation-Engineering).

[[pdf](https://arxiv.org/pdf/2404.13752)] [[arxiv](https://arxiv.org/abs/2404.13752)] [[code](https://github.com/Zhang-Yihao/Adversarial-Representation-Engineering)]
</div>
</div>

# Other Publications
(*: Equal Contribution; ${}^\dagger$: Corresponding Author)

## Automata Extraction from Transformers (Preprint)

**Yihao Zhang**, Zeming Wei, Meng Sun${}^\dagger$

[[pdf](https://arxiv.org/pdf/2406.05564)] [[arxiv](https://arxiv.org/abs/2406.05564)] [[code](https://github.com/Zhang-Yihao/Transfomer2DFA)]

## MILE: A Mutation Testing Framework of In-Context Learning Systems (SETTA 2024)

Zeming Wei, **Yihao Zhang**, Meng Sun${}^\dagger$

[[pdf](https://arxiv.org/pdf/2409.04831.pdf)] [[arxiv](https://arxiv.org/abs/2409.04831)] [[code](https://github.com/weizeming/MILE)]

## MedTiny: Enhanced Mediator Modeling Language for Scalable Parallel Algorithms (QRS 2023)

Xiangyu Li, **Yihao Zhang**, Xiaokun Luan, Xiaoyong Xue, Meng Sun${}^\dagger$

[[pdf](https://qrs23.techconf.org/download/webpub/pdfs/QRS-C2023-56EpUKA3a3CGa6xc1KYNzL/593900a441/593900a441.pdf)]

## Sharpness-aware minimization alone can improve adversarial robustness (ICML 2023 AdvML-Frontiers Workshop)

Zeming Wei\*${}^\dagger$, Jingyu Zhu\*, **Yihao Zhang**\*

[[pdf](https://arxiv.org/pdf/2305.05392)] [[arxiv](https://arxiv.org/abs/2305.05392)] [[code](https://github.com/weizeming/SAM_AT)]

## Using Z3 for Formal Modeling and Verification of FNN Global Robustness (SEKE 2023)

**Yihao Zhang**, Zeming Wei, Xiyue Zhang, Meng Sun${}^\dagger$

[[pdf](https://arxiv.org/pdf/2304.10558)] [[arxiv](https://arxiv.org/abs/2304.10558)] [[code](https://github.com/weizeming/Z3_for_Verification_of_FNN_Global_Robustness)]

## Boosting jailbreak attack with momentum (ICLR 2024 R2-FM Workshop)

**Yihao Zhang**\*, Zeming Wei\*${}^\dagger$

[[pdf](https://arxiv.org/pdf/2405.01229)] [[arxiv](https://arxiv.org/abs/2405.01229)] [[code](https://github.com/weizeming/momentum-attack-llm)]

## Exploring the robustness of in-context learning with noisy labels (ICLR 2024 R2-FM Workshop)

Chen Cheng\*, Xinzhi Yu\*, Haodong Wen\*, Jinsong Sun, Guanzhang Yue, **Yihao Zhang**, Zeming Wei${}^\dagger$

[[pdf](https://arxiv.org/pdf/2404.18191)] [[arxiv](https://arxiv.org/abs/2404.18191)] [[code](https://github.com/InezYu0928/in-context-learning)]

## Weighted automata extraction and explanation of recurrent neural networks for natural language tasks (JLAMP, Vol 136)

Zeming Wei, Xiyue Zhang, **Yihao Zhang**, Meng Sun${}^\dagger$

[[pdf](https://arxiv.org/pdf/2306.14040)] [[arxiv](https://arxiv.org/abs/2306.14040)] [[code](https://github.com/weizeming/Extract_WFA_from_RNN_for_NL)]

# 🎖 Honors and Awards
- **Huaixin Bachelor** (怀新学士, Honours Degree), *2024*
- Selected for the **Elite Program** (拔尖计划, Graduate) in the School of Mathematical Sciences, Peking University.
- **University Scholarship**, Peking University, *2023*
- **Second prize**, Chinese Mathematics Competitions for Undergraduates (Beijing Division), *2023*

# 📖 Educations
- *2023.10 - 2024.05*, Research Assistant, School of Computing and Information Systems, Singapore Management University.
- *2020.09 - 2024.06*, Undergraduate Student, School of Mathematical Sciences, Peking University.
- *2024.09 - 2028.06 (expected)*, PhD, School of Mathematical Sciences, Peking University.

# 💬 Talks
- *2024.09*, Presented our work, [On the Duality Between Sharpness-Aware Minimization and Adversarial Training](https://arxiv.org/pdf/2402.15152), in Yantai University.
- *2024.04*, Presented our work on [Adversarial Representation Engineering](https://arxiv.org/pdf/2404.13752) in an internal talk in Huawei.
- *2023.06*, Presented my paper "Using Z3 for Formal Modeling and Verification of FNN Global Robustness" on SEKE 2023.

# 💻 Projects
- *2023-2025*, Study on the interpretability of large language model architecture and algorithm, Program Director.
- *2022-2025*, Trustworthy guarantee of deep learning system, Member.

# 🔗 Links
- 👨‍🏫 **Advisors**: [Meng Sun](https://www.math.pku.edu.cn/teachers/sunm/index.html) (PKU), [Jun Sun](https://sunjun.site/) (SMU).
- 🧑‍🎓 **Co-authors**: [Zeming Wei](https://weizeming.github.io/), [Xiyue Zhang](https://zhang-xiyue.github.io/), [Huanran Chen](https://huanranchen.github.io/)
## 📚 Academic Links
- [Z3 Guide](https://microsoft.github.io/z3guide/)
- [Z3 Tutorial](https://theory.stanford.edu/~nikolaj/programmingz3.html)
- [Coq](https://coq.inria.fr/)
- [Software Foundations](https://softwarefoundations.cis.upenn.edu/)
- [SPIN](https://spinroot.com/spin/whatispin.html)
- [UPPAAL](https://uppaal.org/)
- [TLA+](https://lamport.azurewebsites.net/tla/tla.html)
- [NuSMV](https://nusmv.fbk.eu/index.html)
- [CMinor Verifier](https://github.com/thufv/CMinor-Verifier/tree/master)
- [CSAPP](https://csapp.cs.cmu.edu/) [Lecture Video](https://www.bilibili.com/video/BV1iW411d7hd/?vd_source=1fc6b166db84dbbef5ddee967c234d61)
- [CAV](http://i-cav.org/)
- [POPL](https://sigplan.org/Conferences/POPL/)
- [Open class on Constraint Solving](https://www.koushare.com/home/searchRes?key=%E7%BA%A6%E6%9D%9F%E6%B1%82%E8%A7%A3), [Bilibili](https://space.bilibili.com/5510373/channel/seriesdetail?sid=3640012&ctype=0)
- Model Checking and Program Verification Courses & Tutorials: [PKU Software Foundations](https://xiongyingfei.github.io/SF/2023/), [PKU Software Analysis](https://xiongyingfei.github.io/SA_new/2023/assignments.html), [USTC Formal Methods](https://faculty.ustc.edu.cn/huangwenchao/zh_CN/zdylm/680196/list/index.htm), [TJU Model Checking](https://cic.tju.edu.cn/faculty/zhangxiaowang/MCPV.htm), [Stanford CS357](https://web.stanford.edu/class/cs357/), [Column of Program Verification on Zhihu](https://www.zhihu.com/column/c_1311359270597419008)
