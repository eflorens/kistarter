import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ARMORS, MATERIALS, ONE_HAND_WEAPONS, TWO_HAND_WEAPONS } from '../../constants';

interface DebugItem {
  id: number;
  known: boolean;
  name?: string;
  type?: string;
  imageValid?: boolean;
  ignored?: boolean;
}

@Component({
  selector: 'app-debug-items',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="header">
        <h1>Debug Items (1-500)</h1>

        <div class="controls">
            <div class="stats">
            <span class="found">{{ stats.known }} Found</span> |
            <span class="missing">{{ stats.unknown }} Missing</span> |
            <span class="ignored-stat">{{ stats.ignored }} Ignored</span>
          </div>

          <div class="filter-buttons">
            <button (click)="filter = 'all'" [class.active]="filter === 'all'">All</button>
            <button (click)="filter = 'unknown'" [class.active]="filter === 'unknown'">Missing Only</button>
            <button (click)="filter = 'known'" [class.active]="filter === 'known'">Found Only</button>
            <button (click)="filter = 'ignored'" [class.active]="filter === 'ignored'">Ignored</button>
          </div>
        </div>
      </div>

      <div class="grid">
        <ng-container *ngFor="let item of items">
          <div *ngIf="shouldShow(item)"
               class="card"
               [class.known]="item.known"
               [class.unknown]="!item.known && !item.ignored"
               [class.ignored-card]="item.ignored"
               (click)="toggleIgnore(item)">
            <div class="card-header">
              <span>#{{ item.id }}</span>
              <span *ngIf="item.known">✅</span>
              <span *ngIf="!item.known && !item.ignored">❌</span>
              <span *ngIf="item.ignored">🚫</span>
            </div>

            <img [src]="'https://www.kigard.fr/images/items/' + item.id + '.gif'"
                 alt="Item {{item.id}}"
                 class="item-image"
                 (error)="onImageError(item)"
                 [style.opacity]="item.imageValid ? '1' : '0.1'">

            <div class="card-footer">
              <div *ngIf="item.known" class="item-name" title="{{item.name}}">{{ item.name }}</div>
              <div *ngIf="item.known" class="item-type">{{ item.type }}</div>

              <div *ngIf="!item.known && !item.ignored" class="missing-label">MISSING</div>
              <div *ngIf="item.ignored" class="ignored-label">IGNORED</div>
            </div>
          </div>
        </ng-container>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      font-family: sans-serif;
    }
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 24px;
    }
    @media (min-width: 768px) {
      .header {
        flex-direction: row;
        justify-content: space-between;
      }
    }
    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .controls {
      display: flex;
      gap: 16px;
      align-items: center;
    }
    .stats {
      background-color: #f3f4f6;
      padding: 8px 12px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 0.875rem;
    }
    .found { color: #16a34a; font-weight: bold; }
    .missing { color: #dc2626; font-weight: bold; }
    .ignored-stat { color: #6b7280; font-weight: bold; }

    .filter-buttons {
      display: flex;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      overflow: hidden;
    }
    .filter-buttons button {
      padding: 6px 12px;
      background: white;
      border: none;
      border-right: 1px solid #d1d5db;
      cursor: pointer;
    }
    .filter-buttons button:last-child {
      border-right: none;
    }
    .filter-buttons button.active {
      background-color: #3b82f6;
      color: white;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    @media (min-width: 640px) { .grid { grid-template-columns: repeat(4, 1fr); } }
    @media (min-width: 1024px) { .grid { grid-template-columns: repeat(6, 1fr); } }

    .card {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      min-height: 140px;
      transition: box-shadow 0.2s;
      cursor: pointer;
    }
    .card:hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    .known {
      background-color: #f0fdf4; /* green-50 */
      border-color: #bbf7d0;
    }
    .unknown {
      background-color: #fef2f2; /* red-50 */
      border-color: #fecaca;
    }
    .ignored-card {
      background-color: #f3f4f6; /* gray-100 */
      border-color: #d1d5db;
      opacity: 0.8;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 0.75rem;
      color: #9ca3af;
      margin-bottom: 8px;
    }
    .item-image {
      margin-bottom: 12px;
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
    .card-footer {
      width: 100%;
      text-align: center;
      font-size: 0.75rem;
    }
    .item-name {
      font-weight: bold;
      color: #1f2937;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .item-type {
      color: #6b7280;
      font-size: 0.65rem;
      text-transform: uppercase;
    }
    .missing-label {
      color: #ef4444;
      font-weight: bold;
    }
    .ignored-label {
      color: #6b7280;
      font-weight: bold;
    }
  `]
})
export class DebugItemsComponent implements OnInit {
  items: DebugItem[] = [];
  filter: 'all' | 'known' | 'unknown' | 'ignored' = 'unknown';

  ignoredIds = new Set<number>();
  stats = { known: 0, unknown: 0, ignored: 0 };

  ngOnInit() {
    this.loadIgnored();
    const knownItems = new Map<number, { name: string, type: string }>();

    // Index Weapons
    [...ONE_HAND_WEAPONS, ...TWO_HAND_WEAPONS, ...ARMORS].forEach(w => {
      knownItems.set(w.id, { name: w.name, type: 'Weapon' });
    });

    // Index Materials
    Object.values(MATERIALS).forEach(m => {
      knownItems.set(m.id, { name: m.name, type: 'Material' });
    });

    // Generate List
    for (let i = 1; i <= 500; i++) {
      const known = knownItems.get(i);
      this.items.push({
        id: i,
        known: !!known,
        name: known?.name,
        type: known?.type,
        imageValid: true, // Assume valid initially
        ignored: this.ignoredIds.has(i)
      });
    }

    this.updateStats();
  }

  onImageError(item: DebugItem) {
    item.imageValid = false;
    this.updateStats(); // Update stats as valid list changes
  }

  updateStats() {
    this.stats.known = this.items.filter(i => i.known).length;
    // Count 'unknown' only if image is valid and not ignored
    this.stats.unknown = this.items.filter(i => !i.known && i.imageValid && !i.ignored).length;
    this.stats.ignored = this.items.filter(i => i.ignored).length;
  }

  loadIgnored() {
    const stored = localStorage.getItem('kistarter_debug_ignored');
    if (stored) {
      try {
        const ids = JSON.parse(stored);
        if (Array.isArray(ids)) {
          this.ignoredIds = new Set(ids);
        }
      } catch (e) { console.error('Failed to load ignored items', e); }
    }
  }

  saveIgnored() {
    localStorage.setItem('kistarter_debug_ignored', JSON.stringify(Array.from(this.ignoredIds)));
  }

  toggleIgnore(item: DebugItem) {
    if (item.known) return; // Prevent ignoring known items

    item.ignored = !item.ignored;
    if (item.ignored) {
      this.ignoredIds.add(item.id);
    } else {
      this.ignoredIds.delete(item.id);
    }

    this.saveIgnored();
    this.updateStats();
  }

  shouldShow(item: DebugItem): boolean {
    // Determine visibility based on filter
    let visible = false;
    if (this.filter === 'all') visible = true;
    else if (this.filter === 'known') visible = item.known;
    else if (this.filter === 'unknown') visible = !item.known && !item.ignored;
    else if (this.filter === 'ignored') visible = !!item.ignored;

    // Always hide if image is invalid (unless it is known? Let's say we hide broken images for everyone as per request to avoid "gaps")
    // Use request "filter out images link that returns no valid images"
    if (!item.imageValid) return false;

    return visible;
  }
}
