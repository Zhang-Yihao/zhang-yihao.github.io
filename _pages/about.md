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

I am YIhao Zhang (张益豪), a senior student at the School of Mathematical Sciences, Peking University (GPA 3.55/4). I served as a visiting research assistant at Singapore Management University, from October 2023 to May 2024. In the foreseeable future of the next five years, I will be pursuing a Ph.D. in Applied Mathematics at the School of Mathematical Sciences, Peking University. I am currently conducting research under the guidance of Professor [Meng Sun](https://www.math.pku.edu.cn/teachers/sunm/index.html) and am a part of his research group. My supervisor at Singapore Management University is [Jun Sun](https://sunjun.site/).

My research interest includes formal methods theory, model checking, AI model explanation/verification/safety issues, AI aided automatic verification and transparency of large language models. I have published 4 papers at different international conferences with total google scholar <a href='https://scholar.google.com/citations?user=9lALkz8AAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>.

If you wish to access my personal homepages prior to 2024, please click [here](https://zhang-yihao.github.io/oldsite).


# 🔥 News
- *2024.04*: &nbsp;🎉 I finished my paper, [Towards General Conceptual Model Editing via Adversarial Representation Engineering](https://arxiv.org/pdf/2404.13752), which is posted on arxiv. Our [repository](https://github.com/Zhang-Yihao/Adversarial-Representation-Engineering) has got 5 stars🌟 on GitHub! 
- *2024.03*: &nbsp;🔗 2 Papers (as first author and second-to-last author, respectively) accepted by ICLR 2024 R2-FM Workshop.
- *2023.12*: &nbsp;💸 My application for the Beijing Natural Science Foundation Undergraduate "Initiating Research" Program has been approved.
- *2023.10*: &nbsp;✈️ I am now going to Singapore Management University for a six-month exchange.
- *2023.09*: &nbsp;🎉 Our paper, [MedTiny: Enhanced Mediator Modeling Language for Scalable Parallel Algorithms](https://qrs23.techconf.org/download/webpub/pdfs/QRS-C2023-56EpUKA3a3CGa6xc1KYNzL/593900a441/593900a441.pdf), is accepted by QRS-C 2023.
- *2023.05*: &nbsp;🎉 Our paper, [Sharpness-Aware Minimization Alone can Improve Adversarial Robustness](https://arxiv.org/pdf/2305.05392v1.pdf), is accepted by 2nd AdvML-Frontiers@ICML 2023.
- *2023.04*: &nbsp;🎉🎉 I have been accepted into the Applied Mathematics Elite Program by the School of Mathematical Sciences at Peking University (only 1 per year), which means that I am expected to spend five years here as a doctoral student.

# 📝 Publications 
(*: Equal Contribution; ${}^\dagger$: Corresponding Author)

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv Preprint</div><img src='images/ARE.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
## Towards General Conceptual Model Editing via Adversarial Representation Engineering (Preprint)
**Yihao Zhang**, Zeming Wei, Jun Sun${}^\dagger$, Meng Sun${}^\dagger$

Recent research has introduced Representation Engineering (RepE) as a promising approach for understanding complex inner workings of large-scale models like Large Language Models (LLMs). However, finding practical and efficient methods to apply these representations for general and flexible model editing remains an open problem. Inspired by the Generative Adversarial Network (GAN) framework, we introduce a novel approach called Adversarial Representation Engineering (ARE). This method leverages RepE by using a representation sensor to guide the editing of LLMs, offering a unified and interpretable framework for conceptual model editing without degrading baseline performance. Our experiments on multiple conceptual editing confirm ARE's effectiveness. Code and data are available at [this https URL](https://github.com/Zhang-Yihao/Adversarial-Representation-Engineering).

[[pdf](https://arxiv.org/pdf/2404.13752)] [[arxiv](https://arxiv.org/abs/2404.13752)] [[code]([https://github.com/weizeming/Extract_WFA_from_RNN_for_NL](https://github.com/Zhang-Yihao/Adversarial-Representation-Engineering))]
</div>
</div>

## Weighted automata extraction and explanation of recurrent neural networks for natural language tasks (JLAMP, Vol 136)
Zeming Wei, Xiyue Zhang, **Yihao Zhang**, Meng Sun${}^\dagger$

Recurrent Neural Networks (RNNs) have achieved tremendous success in processing sequential data, yet understanding and analyzing their behaviours remains a significant challenge. To this end, many efforts have been made to extract finite automata from RNNs, which are more amenable for analysis and explanation. However, existing approaches like exact learning and compositional approaches for model extraction have limitations in either scalability or precision. In this paper, we propose a novel framework of Weighted Finite Automata (WFA) extraction and explanation to tackle the limitations for natural language tasks. First, to address the transition sparsity and context loss problems we identified in WFA extraction for natural language tasks, we propose an empirical method to complement missing rules in the transition diagram, and adjust transition matrices to enhance the context-awareness of the WFA. We also propose two data augmentation tactics to track more dynamic behaviours of RNN, which further allows us to improve the extraction precision. Based on the extracted model, we propose an explanation method for RNNs including a word embedding method – Transition Matrix Embeddings (TME) and TME-based task oriented explanation for the target RNN. Our evaluation demonstrates the advantage of our method in extraction precision than existing approaches, and the effectiveness of TME-based explanation method in applications to pretraining and adversarial example generation.

[[pdf](https://arxiv.org/pdf/2306.14040)] [[arxiv](https://arxiv.org/abs/2306.14040)] [[code](https://github.com/weizeming/Extract_WFA_from_RNN_for_NL)]
## MedTiny: Enhanced Mediator Modeling Language for Scalable Parallel Algorithms (QRS 2023)

Xiangyu Li, **Yihao Zhang**, Xiaokun Luan, Xiaoyong Xue, Meng Sun${}^\dagger$

This paper introduces MedTiny, a streamlined component-based modeling language, evolved from Mediator. Existing modeling languages struggle to provide convenience in expressing recurrent component configurations, which are common in modern large-scale parallel computation modelsin distributed environments. Furthermore, Mediator frequently conducts repetitive flag manipulations to synchronize between distributed entities. To address these issues, we propose syntactic enhancements, including component array with static for each iterator and automatic synchronization flag manipulation.These enhancements significantly reduce code size and effectively address the aforementioned problems. After simplification, we successfully incorporate language feature enhancements into MedTiny without compromising its formality. Subsequently, we develop a prototype code generator that targets multi-threaded Python for code execution and PRISM model checker for verification. To demonstrate MedTiny's efficiency, we include a case study on a character counting MapReduce algorithm.

[[pdf](https://qrs23.techconf.org/download/webpub/pdfs/QRS-C2023-56EpUKA3a3CGa6xc1KYNzL/593900a441/593900a441.pdf)]
## Sharpness-aware minimization alone can improve adversarial robustness (ICML 2023 AdvML-Frontiers Workshop)

Zeming Wei\*${}^\dagger$, Jingyu Zhu\*, **Yihao Zhang**\*

Sharpness-Aware Minimization (SAM) is an effective method for improving generalization ability by regularizing loss sharpness. In this paper, we explore SAM in the context of adversarial robustness. We find that using only SAM can achieve superior adversarial robustness without sacrificing clean accuracy compared to standard training, which is an unexpected benefit. We also discuss the relation between SAM and adversarial training (AT), a popular method for improving the adversarial robustness of DNNs. In particular, we show that SAM and AT differ in terms of perturbation strength, leading to different accuracy and robustness trade-offs. We provide theoretical evidence for these claims in a simplified model. Finally, while AT suffers from decreased clean accuracy and computational overhead, we suggest that SAM can be regarded as a lightweight substitute for AT under certain requirements.

[[pdf](https://arxiv.org/pdf/2305.05392)] [[arxiv](https://arxiv.org/abs/2305.05392)] [[code](https://github.com/weizeming/SAM_AT)]

## Using Z3 for Formal Modeling and Verification of FNN Global Robustness (SEKE 2023)

**Yihao Zhang**, Zeming Wei, Xiyue Zhang, Meng Sun${}^\dagger$

While Feedforward Neural Networks (FNNs) have achieved remarkable success in various tasks, they are vulnerable to adversarial examples. Several techniques have been developed to verify the adversarial robustness of FNNs, but most of them focus on robustness verification against the local perturbation neighborhood of a single data point. There is still a large research gap in global robustness analysis. The global-robustness verifiable framework DeepGlobal has been proposed to identify \textit{all} possible Adversarial Dangerous Regions (ADRs) of FNNs, not limited to data samples in a test set. In this paper, we propose a complete specification and implementation of DeepGlobal utilizing the SMT solver Z3 for more explicit definition, and propose several improvements to DeepGlobal for more efficient verification. To evaluate the effectiveness of our implementation and improvements, we conduct extensive experiments on a set of benchmark datasets. Visualization of our experiment results shows the validity and effectiveness of the approach.

[[pdf](https://arxiv.org/pdf/2304.10558)] [[arxiv](https://arxiv.org/abs/2304.10558)] [[code](https://github.com/weizeming/Z3_for_Verification_of_FNN_Global_Robustness)]

# 🎖 Honors and Awards
- Selected for the **Elite Program** (Graduate) in the School of Mathematical Sciences, Peking University.
- **University Scholarship**, Peking University, *2023*
- **Second prize**, Chinese Mathematics Competitions for Undergraduates (Beijing Division), *2023*

# 📖 Educations
- *2023.10 - 2024.05 (now)*, Research Assistant, School of Computing and Informatino Systems, Singapore Management University.
- *2020.09 - 2024.06 (expected)*, Undergraduate Student, School of Mathematical Sciences, Peking University.

# 💬 Talks
- *2023.06*, Presented my paper "Using Z3 for Formal Modeling and Verification of FNN Global Robustness" on SEKE 2023.

# 💻 Projects
- *2023-2025*, Study on the interpretability of large language model architecture and algorithm, Program Director.
- *2022-2025*, Trustworthy guarantee of deep learning system, Member.

# 🔗 Links
- 👨‍🏫 **Advisors**: [Meng Sun](https://www.math.pku.edu.cn/teachers/sunm/index.html) (PKU), [Jun Sun](https://sunjun.site/) (SMU).
- 🧑‍🎓 **Co-authors**: [Zeming Wei](https://weizeming.github.io/), [Xiyue Zhang](https://zhang-xiyue.github.io/).
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
