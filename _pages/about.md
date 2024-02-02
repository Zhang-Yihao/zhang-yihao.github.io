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

I am Zhang Yihao (张益豪), a senior student at the School of Mathematical Sciences, Peking University. I am also currently serving as a visiting research assistant at Singapore Management University, from October 2023 to May 2024. In the foreseeable future of the next five years, I will be pursuing a Ph.D. in Applied Mathematics at the School of Mathematical Sciences, Peking University. 

My research interest includes formal methods theory, model checking, AI model explanation/verification/safety issues, AI aided automatic verification and transparency of large language models. I have published 4 papers at different international conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>).

If you wish to access my personal homepages prior to 2024, please click [here](https://zhang-yihao.github.io/oldsite).


# 🔥 News
- *2023.10*: &nbsp;✈️ I am now going to Singapore Management University for a six-month exchange.
- *2023.09*: &nbsp;🎉🎉 Our paper, [MedTiny: Enhanced Mediator Modeling Language for Scalable Parallel Algorithms](https://qrs23.techconf.org/download/webpub/pdfs/QRS-C2023-56EpUKA3a3CGa6xc1KYNzL/593900a441/593900a441.pdf), is accepted by QRS-C 2023.
- *2023.05*: &nbsp;🎉🎉 Our paper, [Sharpness-Aware Minimization Alone can Improve Adversarial Robustness](https://arxiv.org/pdf/2305.05392v1.pdf), is accepted by 2nd AdvML-Frontiers@ICML 2023.
- *2023.04*: &nbsp;🎉🎉 I have been accepted into the Applied Mathematics Elite Program by the School of Mathematical Sciences at Peking University (only 1 per year), which means that I am expected to spend five years here as a doctoral student.

# 📝 Publications 
(*: Equal Contribution; †: Corresponding Author)
## MedTiny: Enhanced Mediator Modeling Language for Scalable Parallel Algorithms (QRS 2023)

Xiangyu Li, **Yihao Zhang**, Xiaokun Luan, Xiaoyong Xue, Meng Sun†

This paper introduces MedTiny,a streamlined component-based modeling language, evolved from Mediator. Existing modeling languages struggle to provide convenience in expressing recurrent component configurations, which are common in modern large-scale parallel computation modelsin distributed environments. Furthermore, Mediator frequently conducts repetitive flag manipulations to synchronize between distributed entities. To address these issues, we propose syntactic enhancements, including component array with static for each iterator and automatic synchronization flag manipulation.These enhancements significantly reduce code size and effectively address the aforementioned problems. After simplification, we successfully incorporate language feature enhancements into MedTiny without compromising its formality. Subsequently, we develop a prototype code generator that targets multi-threaded Python for code execution and PRISM model checker for verification. To demonstrate MedTiny's efficiency, we include a case study on a character counting MapReduce algorithm.

[[pdf](https://qrs23.techconf.org/download/webpub/pdfs/QRS-C2023-56EpUKA3a3CGa6xc1KYNzL/593900a441/593900a441.pdf)]

# 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 📖 Educations
- *2019.06 - 2022.04 (now)*, Research Assistant, School of Computing and Informatino Systems, Singapore Management University.
- *2020.09 - 2024.06 (expected)*, Undergraduate Student, School of Mathematical Sciences, Peking University.

# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.
