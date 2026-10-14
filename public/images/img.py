import pandas as pd
import matplotlib.pyplot as plt

data = [
    ["1", "Kumbure, M. M., et al. (2022)\nExpert Systems with Applications", "Input feature selection &\nML evaluation protocols", "Systematic literature review\nof 138 journal articles", "Proved forecasting choices depend on\ndataset inputs & time-ordered protocols."],
    ["2", "Mohapatra, S., et al. (2022)\nJournal of Risk & Financial Mgmt", "Indian equity market &\nbanking sector forecasting", "Ensemble ML models +\ntechnical indicators", "Integrating technical indicators improves\nprediction accuracy in Indian markets."],
    ["3", "Liu, J. (2024)\nPeerJ Computer Science", "Stock market prediction &\nweight optimization", "XGBoost with multi-objective\noptimization & weighting", "Multi-objective optimal weighting enhances\ntree-based model accuracy."],
    ["4", "Engineering App of AI (2023)\nEng. Applications of AI", "Portfolio optimization &\nsignal processing", "Hilbert–Huang Transform (HHT)\nsignal processing + XGBoost", "Combining signal decomposition with XGBoost\ncaptures complex market dynamics."]
]

columns = ["S.NO", "Journal Name + Author + Year", "Subject Focus", "Methodology", "Key Finding"]

fig, ax = plt.subplots(figsize=(14, 6))
ax.axis('tight')
ax.axis('off')

table = ax.table(cellText=data, colLabels=columns, loc='center', cellLoc='left')
table.auto_set_font_size(False)
table.set_fontsize(10)

# Style Header (Blue background like your friend's PPT)
for (row, col), cell in table.get_celld().items():
    if row == 0:
        cell.set_facecolor('#1A8CFF')
        cell.set_text_props(weight='bold', color='white')
    else:
        cell.set_facecolor('#EBF5FF' if row % 2 == 0 else '#FFFFFF')

plt.tight_layout()
plt.savefig('literature_review.png', bbox_inches='tight', dpi=300)
print("Image saved as literature_review.png!")